import { ProjectInst, projectList } from "@/cms/projects";
import { createSlice } from "@reduxjs/toolkit";

export interface ProjectState {
  projects: ProjectInst[];
}

const initialState: ProjectState = {
  projects: projectList,
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
