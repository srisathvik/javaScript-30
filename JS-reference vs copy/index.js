    let age = 100;
    let age2 = age;
    console.log(age, age2);
    age = 200;
    console.log(age, age2);

    let name = 'Wes';
    let name2 = name;
    console.log(name, name2);
    name = 'wesley';
    console.log(name, name2);

    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    const team = players;

    console.log(players, team);
    team[3] = 'Lux';


    const team2 = players.slice();

    const team3 = [].concat(players);

    const team4 = [...players];
    team4[3] = 'heeee hawww';
    console.log(team4);

    const team5 = Array.from(players);


    const person = {
      name: 'Wes Bos',
      age: 80
    };

    const captain = person;
    captain.number = 99;

    const cap2 = Object.assign({}, person, { number: 99, age: 12 });
    console.log(cap2);

    const cap3 = {...person};


    const wes = {
      name: 'Wes',
      age: 100,
      social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      }
    };

    console.clear();
    console.log(wes);

    const dev = Object.assign({}, wes);

    const dev2 = JSON.parse(JSON.stringify(wes));

