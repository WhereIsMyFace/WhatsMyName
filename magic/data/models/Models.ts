export interface Character {
    id: number,
    infos: CharInfos,
    type: CharType,
}

export interface CharInfos {
    playerName: string,
    charName: string,
    nickName: string
}

export interface CharType {
    Race
}

export interface Skill {
    id: number;
    points: number;
    karma: number;
}

export interface SkillGroup extends Skill {
    broken: boolean;
}

export interface Attribute {
    basic: number;
    points: number;
    karma: number;
    max: number;
}