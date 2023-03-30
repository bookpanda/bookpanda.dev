import { projects } from "$data/projects";

export function groupData(data: typeof projects, n: number) {
  const group: (typeof projects)[] = [];
  let a: typeof projects = [];
  for (let i = 0, j = 0; i < data.length; i++) {
    a.push(data[i]);
    j++;
    if (j % n == 0) {
      j = 0;
      group.push([...a]);
      a = [];
    }
  }
  if (a.length > 0) {
    for (let i = 0; a.length < n; i++) {
      a.push(data[i]);
    }
    group.push([...a]);
    a = [];
  }
  return group;
}
