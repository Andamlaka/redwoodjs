type LegalLayoutProps = {
  children?: React.ReactNode
}

const LegalLayout = ({ children }: LegalLayoutProps) => {
  return (
    <div>
      <h1>Legal Layout</h1>
      {children}
    </div>

  )
}

export default LegalLayout
