export class Job {
    id: string;
    thumbnail: string;
    title: string;
    city: string;
    description: string;
    state: string;
    created_at: Date;
    end_date: Date;
    counter: Message;
}

class Message {
    messages_total: number;
    messages_unread: number;
}