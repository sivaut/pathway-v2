// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const WorkStatus = {
  "OPEN": "OPEN",
  "DONE": "DONE",
  "DROP": "DROP",
  "SNOOZE": "SNOOZE"
};

const TaskItemType = {
  "STANDARD": "STANDARD",
  "PERSONAL": "PERSONAL"
};

const StepType = {
  "GOAL": "GOAL",
  "ACHIEVEMENT": "ACHIEVEMENT",
  "LEARN": "LEARN",
  "WORK": "WORK",
  "OTHER": "OTHER"
};

const PublishingStatus = {
  "DRAFT": "DRAFT",
  "PREVIEW": "PREVIEW",
  "PBLISHED": "PBLISHED"
};

const { WalkTag, PathwayTag, TaskItemExecution, ProgressStep, ProgressWalk, ProgressPath, TaskItem, TaskSet, Step, Walk, Enrollment, ProfileExplorer, PathwayVersion, User, Grade, Pathway, Thread, Post, Comment, WalkWalkTag, PathwayPathwayTag } = initSchema(schema);

export {
  WalkTag,
  PathwayTag,
  TaskItemExecution,
  ProgressStep,
  ProgressWalk,
  ProgressPath,
  TaskItem,
  TaskSet,
  Step,
  Walk,
  Enrollment,
  ProfileExplorer,
  PathwayVersion,
  User,
  Grade,
  Pathway,
  Thread,
  Post,
  Comment,
  WalkWalkTag,
  PathwayPathwayTag,
  WorkStatus,
  TaskItemType,
  StepType,
  PublishingStatus
};