import { Loader } from "./Loader"
import { MaxWidthDiv } from "./MaxWidthDiv"

interface ManageLoadScreenTypes {
  loading: boolean
  children: JSX.Element
}

export function ManageLoadScreen({ loading, children }: ManageLoadScreenTypes) {
  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <MaxWidthDiv>
            {children}
          </MaxWidthDiv>
        )}
    </>
  )
}
