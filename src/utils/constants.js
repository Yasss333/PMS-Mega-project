export const UserRolesEnum= {
    ADMIN:"admin",
    PROJECT_ADMIN:"project_admin",
    MEMBERS:"member"
}

export const AvailableUserRoles=Object.values(UserRolesEnum);

export const TaskStatusEnum={
    TODO:"to-do",
    IN_Progress:"in_progress",
    DONE:"done"
}
export const AvailableTaskStatus=Object.values(TaskStatusEnum);
