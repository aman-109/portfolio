'use client';

import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import about from '../../../styles/scss/sections/index/about.module.scss';
import styles from "../../../styles/scss/sections/index/career.module.scss";
import SectionTitle from "../../blocks/section.title";
import Section from "../../structure/section";
import Container from "../../structure/container";

const contributionYears = [2024, 2023, 2022];
export default function GithubGraphSection() {
    const [year, setYear] = useState(2022);

    return (
        <Section classProp={`${styles.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Github Contributions"
                    preTitle=""
                    subTitle={`My GitHub Contributions show my ongoing open-source involvement since ${year}, a fulfilling hobby I engage in during my free time.`}
                />
                <section className={`${styles.area}`}
            >
                <div className={styles.company}>
                    <div className={`${styles.companyContent} `} >
                        <div className="space-y-6 pb-18 pt-100 md:space-y-12">

                                <div className="mt-3  flex flex-wrap !gap-3 text-md leading-7">
                                    {contributionYears.map((singleYear) => (
                                        <button
                                            key={singleYear}
                                            className={`cursor-pointer text-primary-500 ${year===singleYear ? "font-bold":""} selection:text-primary-800 selection:font-bold hover:text-primary-800`}
                                            onClick={() => setYear(singleYear)}
                                        >
                                            {singleYear}
                                        </button>
                                    ))}
                                </div>

                            <div
                                className={`p-6 w-full flex justify-center items-center overflow-hidden rounded-md border-2 border-opacity-60 transition-all hover:border-primary-900`}
                            >
                                <GitHubCalendar
                                    key={`${year}-calendar`}
                                    username="aman-109"
                                    year={year}
                                    colorScheme="light"
                                    
                                />
                            </div>

                        </div>
                    </div>
                </div>
                </section>
            </Container>
        </Section>
    )
        ;
}