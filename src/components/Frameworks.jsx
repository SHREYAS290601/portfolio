import { OrbitingCircles } from "./Orbitingcircles";

export function Frameworks() {
  const skills = [
    "python",
    "pandas",
    "numpy",
    'javascript',
    'pytorch',
    'r-project',
    'mysql-logo',
    'tensorflow',
    'matplotlib',
    'opencv',
    'hugging-face',
    'postgresql',
    'vs-code',
    'aws',
    'azure',
    'django',
    'excel',
    'docker',
    'mongodb',
    'github'
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/icons8-${skill}-48.png`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/icons8-${skill}-48.png`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);