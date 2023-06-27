import MainLayout from "./main"

const layouts = {
    main: MainLayout,
    // dash: DashLayout,
}

/*
    ** typescript **
    @param children: ReactNode
    @param name: string
    @return ReactNode
*/
const Layout = ({ children, name }) => {
    const TargetLayout = layouts[name ?? "main"];

    return (
        <TargetLayout>
            {children}
        </TargetLayout>
    )
}

export default Layout
