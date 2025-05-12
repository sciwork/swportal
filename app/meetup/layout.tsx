import Container from "@/components/Container";

export default function MeetupLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <Container as="main">{children}</Container>
}