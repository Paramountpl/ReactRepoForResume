import React from "react";
import PersonalDetails from "./components/PersonalDetails";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Skills from "./components/Skills";
import KeyAchievements from "./components/KeyAchievements";
import WorkHistory from "./components/WorkHistory";
import Learning from "./components/Learning";
import Accomplishments from "./components/Accomplishments";
import Interests from "./components/Interests";
import SkillsIdentity from "./components/SkillsIdentity";
import Photo from "./components/Photo";

const App: React.FC = () => (
  <div className="container mt-5">
    <Photo />
    <PersonalDetails />
    <ProfessionalSummary />
    <Skills />
    <KeyAchievements />
    <WorkHistory />
    <Learning />
    <Accomplishments />
    <SkillsIdentity />
  </div>
);

export default App;
