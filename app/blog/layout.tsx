import Container from "@/components/Container";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <Container as="main">{children}</Container>
}