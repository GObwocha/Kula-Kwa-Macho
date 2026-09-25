import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Clock, ExternalLink } from "lucide-react";

export default async function HistoryPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  // Fetch orders
  const { data: orders, error } = await supabase
    .from('orders')
    .select(`
      id,
      total_amount,
      created_at,
      status,
      fictional_rider,
      order_items (
        id,
        quantity,
        price_at_time,
        foods (name, image_url)
      )
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6 text-foreground" />
          </div>
          <h1 className="text-4xl font-heading font-bold">Imaginary History</h1>
        </div>

        {!orders || orders.length === 0 ? (
          <div className="bg-card border border-border rounded-3xl p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">No fictional orders yet</h2>
            <p className="text-muted-foreground mb-8">
              Your imaginary stomach is empty. Time to change that.
            </p>
            <Link href="/explore" className="btn btn-primary px-8 py-3">
              Browse Food
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order: any) => (
              <div key={order.id} className="bg-card border border-border rounded-3xl p-6">
                <div className="flex justify-between items-start mb-6 border-b border-border pb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Order ID: {order.id.split('-')[0]}</p>
                    <p className="font-medium">{new Date(order.created_at).toLocaleDateString()} at {new Date(order.created_at).toLocaleTimeString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">KSh {order.total_amount.toLocaleString()}</p>
                    <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium uppercase tracking-wider mt-1">
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {order.order_items.map((item: any) => {
                    const food = Array.isArray(item.foods) ? item.foods[0] : item.foods;
                    return (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-3">
                          <span className="font-bold bg-muted w-6 h-6 rounded flex items-center justify-center text-xs">
                            {item.quantity}x
                          </span>
                          <span>{food?.name || 'Unknown food'}</span>
                        </div>
                        <span className="text-muted-foreground">
                          KSh {(item.price_at_time * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 flex justify-between items-center border-t border-border">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                    Rider: {order.fictional_rider}
                  </p>
                  <Link 
                    href={`/delivery/${order.id}?rider=${order.fictional_rider}`}
                    className="text-brand-red font-medium text-sm flex items-center gap-1 hover:underline"
                  >
                    View Status <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
