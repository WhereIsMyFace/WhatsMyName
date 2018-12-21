interface Skill {
    id: number;
    points: number;
    karma: number;
}

interface SkillGroup extends Skill {
    broken: boolean;
}