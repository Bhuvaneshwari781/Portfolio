import React, { useState, useEffect } from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import skillsData from "../../data/skills.json";
import historyData from "../../data/history.json";

export const Experience = () => {
  const [skills, setSkills] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setSkills(skillsData || []);
    setHistory(historyData || []);
  }, []);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>

        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <div key={index} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(`skills/${skill.imageSrc}`)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))
          ) : (
            <p>Loading skills...</p>
          )}
        </div>

        {/* Work Experience Section */}
        <ul className={styles.history}>
          {history.length > 0 ? (
            history.map((historyItem, index) => (
              <li key={index} className={styles.historyItem}>
                <img src={getImageUrl(`history/${historyItem.imgSrc}`)}
                  alt={`${historyItem.organization} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {Array.isArray(historyItem.experiences) && historyItem.experiences.length > 0 ? (
                      historyItem.experiences.map((experience, i) => (
                        <li key={i}>{experience}</li>
                      ))
                    ) : (
                      <li>No experience details available</li>
                    )}
                  </ul>
                </div>
              </li>
            ))
          ) : (
            <p>Loading experience...</p>
          )}
        </ul>
      </div>
    </section>
  );
};
