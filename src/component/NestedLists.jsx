const users = [
  {
    fullName: "Ishan Rana",
    age: 20,
    phones: [
      { home: "01737342822" },
      { office: "0164545549" }
    ]
  },
  {
    fullName: "Meherul",
    age: 50,
    phones: [
      { home: "017348323" },
      { office: "019443983" }
    ]
  }
];

const NestedLists = () => {
  return (
    <div>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h1>
              User Name is: {user.fullName}
            </h1>
            <p>
              User age is: {user.age}
            </p>
            {user.phones.map((phone, phoneIndex) => {
              return (
                <div key={phoneIndex}>
                  <h1>
                    Home Phone Number: {phone.home}
                  </h1>
                  {phone.office && (
                    <p>
                      Office Phone Number: {phone.office}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default NestedLists;
