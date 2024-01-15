type Team = "red" | "blue" | "yellow";
type Health = 1 | 6 | 10;

//** 단지 object모양을 정해줄 수 있다. */
//** 동일한 인터페이스 이름은 알아서 합체 해주지만, type은 안됨. */
//** type키워드는 interface에 비해 활용성이 더 많다. */
interface Player {
  nickname: string;
  team: Team;
  health: Health;
}

const kjyh: Player = {
  nickname: "jaehyeong",
  team: "yellow",
  health: 1,
};

interface User {
  name: string;
}

interface Monster extends User {
  hp?: number;
}

type Monster2 = User & {
  attack: string;
};

const jaehyeong: Monster = {
  name: "kjh",
  hp: 1000,
};

// jaehyeong.name = "sdsds"; // readonly 사용 시 읽기만 가능!

console.log(jaehyeong.name);
