// Ici on va se baser sur les modeles du back end générés par prisma


export type User = {
    id: number;
    username: string;
    email: string;
    todos: Todo[];
    //   _count: UserCount | null
}

export type Todo = {
    id: Number;
    title: String;
    description: String | null;
    completed: Boolean;
    createdAt: Date;
    updatedAt: Date;
    userId: Number;
    user: User
}

// interfaces crées pour correspondre au format donnée par le resultat des requêtes graphQL
export interface TodosQueryResponse {
    todos: Todo[] | null;
    errors: any
}

export interface TodoQueryResponse {
    todo: Todo | null;
    deleteOneTodo: Todo | null
    createOneTodo: Todo | null;
    updateOneTodo: Todo | null;
    errors: any
}