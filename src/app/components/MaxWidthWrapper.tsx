import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xlpx-2.5 sm:px-8 md:px-20 p-4 sm:p-8', className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper