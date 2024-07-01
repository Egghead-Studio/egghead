/* eslint no-unused-vars: 0 */
export enum EventName {
  PageViewEvent = 'page_view',
  ClickEvent = 'click_event',
  ViewEvent = 'view_event',
  BackToProjectsEvent = 'back_to_projects',
  ProjectVisitEvent = 'project_visit',
}

export interface EventProperties {
  distinct_id: string
  path: string
  ip?: string
  [key: string]: any
}

export interface AnalyticsEvent {
  name: EventName
  properties: EventProperties
}
