import Container from "@/components/Container";

export default function ConferenceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <Container as="main">{children}</Container>
}