interface SkillCompProps {
    links: string[];
}

export default function SkillComp({ links }: SkillCompProps) {
    return (
        <>
            {links.map((link) => (
                <img
                    src={link}
                    width="30"
                    height="30"
                />
            ))}
        </>
    );
}