import "./App.css";

export default function App() {
  const student = [
    {
      name: "Sathish",
      profile:
        "https://www.unigreet.com/wp-content/uploads/2020/12/smiley-dp.jpg"
    },
    {
      name: "Tamil selvan",
      profile:
        "https://funkylife.in/wp-content/uploads/2021/07/whatsapp-dp-57.jpg"
    },
    {
      name: "Ragav",
      profile:
        "https://1.bp.blogspot.com/-qO9bqDQNWd8/XmoZjU3DQyI/AAAAAAAAPbE/lw6f5hImQCAmuag03TVr9184ZJCIp4rSQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Funny%2BWhatsapp%2BDP%2B%25281%2529.jpg"
    }
  ];

  return (
    <div className="App">
      {student.map((nm) => (
        <Welcome name={nm.name} profile={nm.profile} />
      ))}
    </div>
  );
}

function Welcome({ name, profile }) {
  return (
    <div>
      <img src={profile} alt="Profile_pic" />
      <h1>hi!! dear student {name}!!!</h1>
    </div>
  );
}
