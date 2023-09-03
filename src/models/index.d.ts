import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum WorkStatus {
  OPEN = "OPEN",
  DONE = "DONE",
  DROP = "DROP",
  SNOOZE = "SNOOZE"
}

export enum TaskItemType {
  STANDARD = "STANDARD",
  PERSONAL = "PERSONAL"
}

export enum StepType {
  GOAL = "GOAL",
  ACHIEVEMENT = "ACHIEVEMENT",
  LEARN = "LEARN",
  WORK = "WORK",
  OTHER = "OTHER"
}

export enum PublishingStatus {
  DRAFT = "DRAFT",
  PREVIEW = "PREVIEW",
  PBLISHED = "PBLISHED"
}



type EagerWalkTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WalkTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly walks?: (WalkWalkTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWalkTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WalkTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly walks: AsyncCollection<WalkWalkTag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WalkTag = LazyLoading extends LazyLoadingDisabled ? EagerWalkTag : LazyWalkTag

export declare const WalkTag: (new (init: ModelInit<WalkTag>) => WalkTag) & {
  copyOf(source: WalkTag, mutator: (draft: MutableModel<WalkTag>) => MutableModel<WalkTag> | void): WalkTag;
}

type EagerPathwayTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PathwayTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly pathways?: (PathwayPathwayTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPathwayTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PathwayTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly pathways: AsyncCollection<PathwayPathwayTag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PathwayTag = LazyLoading extends LazyLoadingDisabled ? EagerPathwayTag : LazyPathwayTag

export declare const PathwayTag: (new (init: ModelInit<PathwayTag>) => PathwayTag) & {
  copyOf(source: PathwayTag, mutator: (draft: MutableModel<PathwayTag>) => MutableModel<PathwayTag> | void): PathwayTag;
}

type EagerTaskItemExecution = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskItemExecution, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TaskItem?: TaskItem | null;
  readonly type?: TaskItemType | keyof typeof TaskItemType | null;
  readonly status?: WorkStatus | keyof typeof WorkStatus | null;
  readonly progressstepID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly taskItemExecutionTaskItemId?: string | null;
}

type LazyTaskItemExecution = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskItemExecution, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TaskItem: AsyncItem<TaskItem | undefined>;
  readonly type?: TaskItemType | keyof typeof TaskItemType | null;
  readonly status?: WorkStatus | keyof typeof WorkStatus | null;
  readonly progressstepID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly taskItemExecutionTaskItemId?: string | null;
}

export declare type TaskItemExecution = LazyLoading extends LazyLoadingDisabled ? EagerTaskItemExecution : LazyTaskItemExecution

export declare const TaskItemExecution: (new (init: ModelInit<TaskItemExecution>) => TaskItemExecution) & {
  copyOf(source: TaskItemExecution, mutator: (draft: MutableModel<TaskItemExecution>) => MutableModel<TaskItemExecution> | void): TaskItemExecution;
}

type EagerProgressStep = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgressStep, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status?: boolean | null;
  readonly definedStep?: Step | null;
  readonly progresswalkID: string;
  readonly lastActedOn?: string | null;
  readonly TaskItemExecutions?: (TaskItemExecution | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly progressStepDefinedStepId?: string | null;
}

type LazyProgressStep = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgressStep, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status?: boolean | null;
  readonly definedStep: AsyncItem<Step | undefined>;
  readonly progresswalkID: string;
  readonly lastActedOn?: string | null;
  readonly TaskItemExecutions: AsyncCollection<TaskItemExecution>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly progressStepDefinedStepId?: string | null;
}

export declare type ProgressStep = LazyLoading extends LazyLoadingDisabled ? EagerProgressStep : LazyProgressStep

export declare const ProgressStep: (new (init: ModelInit<ProgressStep>) => ProgressStep) & {
  copyOf(source: ProgressStep, mutator: (draft: MutableModel<ProgressStep>) => MutableModel<ProgressStep> | void): ProgressStep;
}

type EagerProgressWalk = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgressWalk, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly progresspathID: string;
  readonly definedWalk?: WalkTag | null;
  readonly hasProgressSteps?: (ProgressStep | null)[] | null;
  readonly totalSteps?: number | null;
  readonly doneSteps?: number | null;
  readonly lastActedOn?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly progressWalkDefinedWalkId?: string | null;
}

type LazyProgressWalk = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgressWalk, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly progresspathID: string;
  readonly definedWalk: AsyncItem<WalkTag | undefined>;
  readonly hasProgressSteps: AsyncCollection<ProgressStep>;
  readonly totalSteps?: number | null;
  readonly doneSteps?: number | null;
  readonly lastActedOn?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly progressWalkDefinedWalkId?: string | null;
}

export declare type ProgressWalk = LazyLoading extends LazyLoadingDisabled ? EagerProgressWalk : LazyProgressWalk

export declare const ProgressWalk: (new (init: ModelInit<ProgressWalk>) => ProgressWalk) & {
  copyOf(source: ProgressWalk, mutator: (draft: MutableModel<ProgressWalk>) => MutableModel<ProgressWalk> | void): ProgressWalk;
}

type EagerProgressPath = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgressPath, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly definedPathwayVersion?: PathwayVersion | null;
  readonly hasProgressWalks?: (ProgressWalk | null)[] | null;
  readonly totalWalks?: number | null;
  readonly doneWalks?: number | null;
  readonly totalSteps?: number | null;
  readonly doneSteps?: number | null;
  readonly lastActedOn?: string | null;
  readonly prefUserName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly progressPathDefinedPathwayVersionId?: string | null;
}

type LazyProgressPath = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgressPath, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly definedPathwayVersion: AsyncItem<PathwayVersion | undefined>;
  readonly hasProgressWalks: AsyncCollection<ProgressWalk>;
  readonly totalWalks?: number | null;
  readonly doneWalks?: number | null;
  readonly totalSteps?: number | null;
  readonly doneSteps?: number | null;
  readonly lastActedOn?: string | null;
  readonly prefUserName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly progressPathDefinedPathwayVersionId?: string | null;
}

export declare type ProgressPath = LazyLoading extends LazyLoadingDisabled ? EagerProgressPath : LazyProgressPath

export declare const ProgressPath: (new (init: ModelInit<ProgressPath>) => ProgressPath) & {
  copyOf(source: ProgressPath, mutator: (draft: MutableModel<ProgressPath>) => MutableModel<ProgressPath> | void): ProgressPath;
}

type EagerTaskItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tasksetID: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTaskItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tasksetID: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TaskItem = LazyLoading extends LazyLoadingDisabled ? EagerTaskItem : LazyTaskItem

export declare const TaskItem: (new (init: ModelInit<TaskItem>) => TaskItem) & {
  copyOf(source: TaskItem, mutator: (draft: MutableModel<TaskItem>) => MutableModel<TaskItem> | void): TaskItem;
}

type EagerTaskSet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskSet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TaskItems?: (TaskItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTaskSet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskSet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TaskItems: AsyncCollection<TaskItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TaskSet = LazyLoading extends LazyLoadingDisabled ? EagerTaskSet : LazyTaskSet

export declare const TaskSet: (new (init: ModelInit<TaskSet>) => TaskSet) & {
  copyOf(source: TaskSet, mutator: (draft: MutableModel<TaskSet>) => MutableModel<TaskSet> | void): TaskSet;
}

type EagerStep = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Step, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly walkID: string;
  readonly TaskSet?: TaskSet | null;
  readonly name: string;
  readonly description?: string | null;
  readonly videoLink?: string | null;
  readonly referenceLinks?: (string | null)[] | null;
  readonly sequence: number;
  readonly type: StepType | keyof typeof StepType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly stepTaskSetId?: string | null;
}

type LazyStep = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Step, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly walkID: string;
  readonly TaskSet: AsyncItem<TaskSet | undefined>;
  readonly name: string;
  readonly description?: string | null;
  readonly videoLink?: string | null;
  readonly referenceLinks?: (string | null)[] | null;
  readonly sequence: number;
  readonly type: StepType | keyof typeof StepType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly stepTaskSetId?: string | null;
}

export declare type Step = LazyLoading extends LazyLoadingDisabled ? EagerStep : LazyStep

export declare const Step: (new (init: ModelInit<Step>) => Step) & {
  copyOf(source: Step, mutator: (draft: MutableModel<Step>) => MutableModel<Step> | void): Step;
}

type EagerWalk = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Walk, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Steps?: (Step | null)[] | null;
  readonly pathwayversionID: string;
  readonly name: string;
  readonly description: string;
  readonly videoLink?: string | null;
  readonly referenceLinks?: (string | null)[] | null;
  readonly WalkTags?: (WalkWalkTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWalk = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Walk, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Steps: AsyncCollection<Step>;
  readonly pathwayversionID: string;
  readonly name: string;
  readonly description: string;
  readonly videoLink?: string | null;
  readonly referenceLinks?: (string | null)[] | null;
  readonly WalkTags: AsyncCollection<WalkWalkTag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Walk = LazyLoading extends LazyLoadingDisabled ? EagerWalk : LazyWalk

export declare const Walk: (new (init: ModelInit<Walk>) => Walk) & {
  copyOf(source: Walk, mutator: (draft: MutableModel<Walk>) => MutableModel<Walk> | void): Walk;
}

type EagerEnrollment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Enrollment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly toPathway?: Pathway | null;
  readonly tPathwayVersiono?: PathwayVersion | null;
  readonly profileexplorerID: string;
  readonly ProgressPath?: ProgressPath | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly enrollmentToPathwayId?: string | null;
  readonly enrollmentTPathwayVersionoId?: string | null;
  readonly enrollmentProgressPathId?: string | null;
}

type LazyEnrollment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Enrollment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly toPathway: AsyncItem<Pathway | undefined>;
  readonly tPathwayVersiono: AsyncItem<PathwayVersion | undefined>;
  readonly profileexplorerID: string;
  readonly ProgressPath: AsyncItem<ProgressPath | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly enrollmentToPathwayId?: string | null;
  readonly enrollmentTPathwayVersionoId?: string | null;
  readonly enrollmentProgressPathId?: string | null;
}

export declare type Enrollment = LazyLoading extends LazyLoadingDisabled ? EagerEnrollment : LazyEnrollment

export declare const Enrollment: (new (init: ModelInit<Enrollment>) => Enrollment) & {
  copyOf(source: Enrollment, mutator: (draft: MutableModel<Enrollment>) => MutableModel<Enrollment> | void): Enrollment;
}

type EagerProfileExplorer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProfileExplorer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly screenName?: string | null;
  readonly byUser?: User | null;
  readonly Enrollments?: (Enrollment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly profileExplorerByUserId?: string | null;
}

type LazyProfileExplorer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProfileExplorer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly screenName?: string | null;
  readonly byUser: AsyncItem<User | undefined>;
  readonly Enrollments: AsyncCollection<Enrollment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly profileExplorerByUserId?: string | null;
}

export declare type ProfileExplorer = LazyLoading extends LazyLoadingDisabled ? EagerProfileExplorer : LazyProfileExplorer

export declare const ProfileExplorer: (new (init: ModelInit<ProfileExplorer>) => ProfileExplorer) & {
  copyOf(source: ProfileExplorer, mutator: (draft: MutableModel<ProfileExplorer>) => MutableModel<ProfileExplorer> | void): ProfileExplorer;
}

type EagerPathwayVersion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PathwayVersion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ofPathway?: Pathway | null;
  readonly version?: number | null;
  readonly published?: string | null;
  readonly status?: PublishingStatus | keyof typeof PublishingStatus | null;
  readonly Walks?: (Walk | null)[] | null;
  readonly latest?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pathwayVersionOfPathwayId?: string | null;
}

type LazyPathwayVersion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PathwayVersion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ofPathway: AsyncItem<Pathway | undefined>;
  readonly version?: number | null;
  readonly published?: string | null;
  readonly status?: PublishingStatus | keyof typeof PublishingStatus | null;
  readonly Walks: AsyncCollection<Walk>;
  readonly latest?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pathwayVersionOfPathwayId?: string | null;
}

export declare type PathwayVersion = LazyLoading extends LazyLoadingDisabled ? EagerPathwayVersion : LazyPathwayVersion

export declare const PathwayVersion: (new (init: ModelInit<PathwayVersion>) => PathwayVersion) & {
  copyOf(source: PathwayVersion, mutator: (draft: MutableModel<PathwayVersion>) => MutableModel<PathwayVersion> | void): PathwayVersion;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly graduatingYear?: number | null;
  readonly asExplorer?: ProfileExplorer | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAsExplorerId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly graduatingYear?: number | null;
  readonly asExplorer: AsyncItem<ProfileExplorer | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAsExplorerId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerGrade = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grade, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gradeLevel?: number | null;
  readonly pathwayID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGrade = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grade, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gradeLevel?: number | null;
  readonly pathwayID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Grade = LazyLoading extends LazyLoadingDisabled ? EagerGrade : LazyGrade

export declare const Grade: (new (init: ModelInit<Grade>) => Grade) & {
  copyOf(source: Grade, mutator: (draft: MutableModel<Grade>) => MutableModel<Grade> | void): Grade;
}

type EagerPathway = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pathway, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly suggestedGrades?: (Grade | null)[] | null;
  readonly hasManyVersion?: PathwayVersion | null;
  readonly latestPathwayVersion?: PathwayVersion | null;
  readonly PathwayTags?: (PathwayPathwayTag | null)[] | null;
  readonly tags?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pathwayHasManyVersionId?: string | null;
  readonly pathwayLatestPathwayVersionId?: string | null;
}

type LazyPathway = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pathway, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly suggestedGrades: AsyncCollection<Grade>;
  readonly hasManyVersion: AsyncItem<PathwayVersion | undefined>;
  readonly latestPathwayVersion: AsyncItem<PathwayVersion | undefined>;
  readonly PathwayTags: AsyncCollection<PathwayPathwayTag>;
  readonly tags?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pathwayHasManyVersionId?: string | null;
  readonly pathwayLatestPathwayVersionId?: string | null;
}

export declare type Pathway = LazyLoading extends LazyLoadingDisabled ? EagerPathway : LazyPathway

export declare const Pathway: (new (init: ModelInit<Pathway>) => Pathway) & {
  copyOf(source: Pathway, mutator: (draft: MutableModel<Pathway>) => MutableModel<Pathway> | void): Pathway;
}

type EagerThread = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Thread, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts?: (Post | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyThread = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Thread, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts: AsyncCollection<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Thread = LazyLoading extends LazyLoadingDisabled ? EagerThread : LazyThread

export declare const Thread: (new (init: ModelInit<Thread>) => Thread) & {
  copyOf(source: Thread, mutator: (draft: MutableModel<Thread>) => MutableModel<Thread> | void): Thread;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly comments?: (Comment | null)[] | null;
  readonly oblogID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly comments: AsyncCollection<Comment>;
  readonly oblogID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post?: Post | null;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post: AsyncItem<Post | undefined>;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerWalkWalkTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WalkWalkTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly walkTagId?: string | null;
  readonly walkId?: string | null;
  readonly walkTag: WalkTag;
  readonly walk: Walk;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWalkWalkTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WalkWalkTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly walkTagId?: string | null;
  readonly walkId?: string | null;
  readonly walkTag: AsyncItem<WalkTag>;
  readonly walk: AsyncItem<Walk>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WalkWalkTag = LazyLoading extends LazyLoadingDisabled ? EagerWalkWalkTag : LazyWalkWalkTag

export declare const WalkWalkTag: (new (init: ModelInit<WalkWalkTag>) => WalkWalkTag) & {
  copyOf(source: WalkWalkTag, mutator: (draft: MutableModel<WalkWalkTag>) => MutableModel<WalkWalkTag> | void): WalkWalkTag;
}

type EagerPathwayPathwayTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PathwayPathwayTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pathwayTagId?: string | null;
  readonly pathwayId?: string | null;
  readonly pathwayTag: PathwayTag;
  readonly pathway: Pathway;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPathwayPathwayTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PathwayPathwayTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pathwayTagId?: string | null;
  readonly pathwayId?: string | null;
  readonly pathwayTag: AsyncItem<PathwayTag>;
  readonly pathway: AsyncItem<Pathway>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PathwayPathwayTag = LazyLoading extends LazyLoadingDisabled ? EagerPathwayPathwayTag : LazyPathwayPathwayTag

export declare const PathwayPathwayTag: (new (init: ModelInit<PathwayPathwayTag>) => PathwayPathwayTag) & {
  copyOf(source: PathwayPathwayTag, mutator: (draft: MutableModel<PathwayPathwayTag>) => MutableModel<PathwayPathwayTag> | void): PathwayPathwayTag;
}