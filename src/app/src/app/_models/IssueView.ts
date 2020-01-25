import { IssueInnerIssueMessageView } from './IssueInnerIssueView';

export class IssueView {
    id: number;
    topic: string;
    membersIds: number[];
    messageViews: IssueInnerIssueMessageView[];
}