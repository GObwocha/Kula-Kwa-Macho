'use server'

import { createClient } from '@/lib/supabase/server'

export async function submitFictionalOrder(data: {
  totalAmount: number,
  speed: string,
  rider: string,
  items: Array<{
    foodId: string,
    quantity: number,
    price: number,
    customizations: any
  }>
}) {
  const supabase = await createClient()

  const { data: userData } = await supabase.auth.getUser()
  const userId = userData?.user?.id

  // Create order
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      user_id: userId || null,
      total_amount: data.totalAmount,
      status: 'delivering', // Fictional immediate start
      fictional_delivery_speed: data.speed,
      fictional_rider: data.rider
    })
    .select('id')
    .single()

  if (orderError) {
    console.error("Order creation failed", orderError)
    return { error: 'Failed to create imaginary order' }
  }

  // Create order items
  const orderItems = data.items.map(item => ({
    order_id: order.id,
    food_id: item.foodId,
    quantity: item.quantity,
    price_at_time: item.price,
    customizations: item.customizations
  }))

  const { error: itemsError } = await supabase
    .from('order_items')
    .insert(orderItems)

  if (itemsError) {
    console.error("Order items creation failed", itemsError)
    // Non-fatal for the joke, but log it
  }

  return { success: true, orderId: order.id }
}
