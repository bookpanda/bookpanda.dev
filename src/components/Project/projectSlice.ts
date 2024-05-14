import { ProjectInst, projectList } from "@/cms/projects";
import { createSlice } from "@reduxjs/toolkit";

export interface ProjectState {
  projects: ProjectInst[];
}

const sortedProjects = projectList.sort(
  (a, b) => b.date.getTime() - a.date.getTime()
);

const initialState: ProjectState = {
  projects: sortedProjects,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  selectors: {
    selectProjects: (state) => state.projects,
  },
});

export const { selectProjects } = projectSlice.selectors;
