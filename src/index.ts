type User = {
  name: string;
  age: number | null;
};

const user: User = {
  name: "柴谷",
  age: 1
};

function isChild(user: User) {
  if (user.age === null) return;
  return user.age <= 12;
}

console.log(isChild(user));
