import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 max-w-2xl mx-auto">
      <h2 className="text-5xl font-heading font-bold mb-6 text-brand-red">About KulaKwaMacho</h2>
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        KulaKwaMacho (&quot;Eat with your eyes&quot;) is an interactive Kenyan food discovery platform. 
        It is not a real restaurant. It is not a real delivery app. It is a tribute to the beautiful, chaotic, and delicious world of Kenyan food.
      </p>
      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
        We turn the emotional journey of ordering food into an entertaining digital experience where you build a fictional order and pay with an entirely imaginary wallet.
      </p>
      <Link href="/explore" className="btn btn-primary px-8 py-4 text-lg">
        Start Exploring
      </Link>
    </div>
  );
}
