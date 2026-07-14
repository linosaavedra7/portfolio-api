export declare class CreateProjectDto {
    title: string;
    description: string;
    longDescription?: string;
    imageUrl?: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
    order?: number;
}
