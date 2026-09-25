'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { toggleFavorite } from '@/app/food/actions'
import { useRouter } from 'next/navigation'

export function FavoriteButton({ 
  foodId, 
  initialIsFavorited, 
  isLoggedIn 
}: { 
  foodId: string, 
  initialIsFavorited: boolean,
  isLoggedIn: boolean
}) {
  const [isFavorited, setIsFavorited] = useState(initialIsFavorited)
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()

  const handleToggle = async () => {
    if (!isLoggedIn) {
      router.push('/auth/login')
      return
    }

    setIsPending(true)
    const originalState = isFavorited
    setIsFavorited(!isFavorited)

    const result = await toggleFavorite(foodId, originalState)
    
    if (result.error) {
      // Revert on error
      setIsFavorited(originalState)
    }
    
    setIsPending(false)
  }

  return (
    <button 
      onClick={handleToggle}
      disabled={isPending}
      className={`p-3 rounded-full border transition-all ${
        isFavorited 
          ? 'bg-brand-red/10 border-brand-red text-brand-red' 
          : 'bg-white border-border text-muted-foreground hover:text-brand-red hover:border-brand-red'
      }`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart className={`w-6 h-6 ${isFavorited ? 'fill-current' : ''}`} />
    </button>
  )
}
