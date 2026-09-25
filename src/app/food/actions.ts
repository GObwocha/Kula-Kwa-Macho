'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function toggleFavorite(foodId: string, isFavorited: boolean) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { error: 'You must be logged in to favorite foods.' }
  }

  if (isFavorited) {
    // Remove favorite
    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq('user_id', user.id)
      .eq('food_id', foodId)
      
    if (error) return { error: error.message }
  } else {
    // Add favorite
    const { error } = await supabase
      .from('favorites')
      .insert({ user_id: user.id, food_id: foodId })

    if (error) return { error: error.message }
  }

  revalidatePath('/', 'layout')
  return { success: true }
}
