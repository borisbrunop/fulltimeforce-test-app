import { Loader } from "./Loader"
import { MaxWidthDiv } from "./MaxWidthDiv"

interface ManageLoadScreenTypes {
  loading: boolean
  children: JSX.Element,
  className?: string
}

export function ManageLoadScreen({ loading, children, className = '' }: ManageLoadScreenTypes) {
  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <MaxWidthDiv classNameInner={`pb-24 ${className}`}>
            {children}
          </MaxWidthDiv>
        )}
    </>
  )
}
