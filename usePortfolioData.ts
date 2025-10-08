import React, { useState, useEffect } from 'react';
import { initialProjects, initialStats, initialAboutMe, initialSkills, initialTestimonials, initialNewsArticles } from './constants';
import type { Project, Skill, Testimonial, NewsArticle } from './types';

const PORTFOLIO_DATA_KEY = 'portfolioData';

type Stat = { value: string; label: string; };
type AboutMe = { p1: string; p2: string; profileImage: string; };

export const usePortfolioData = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [stats, setStats] = useState<Stat[]>([]);
    const [aboutMe, setAboutMe] = useState<AboutMe>(initialAboutMe);
    const [skills, setSkills] = useState<Skill[]>([]);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        try {
            const savedData = localStorage.getItem(PORTFOLIO_DATA_KEY);
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                setProjects(parsedData.projects || initialProjects);
                setStats(parsedData.stats || initialStats);
                setAboutMe(parsedData.aboutMe || initialAboutMe);
                setSkills(parsedData.skills || initialSkills);
                setTestimonials(parsedData.testimonials || initialTestimonials);
                setNewsArticles(parsedData.newsArticles || initialNewsArticles);
            } else {
                // Set initial data if nothing is in localStorage
                setProjects(initialProjects);
                setStats(initialStats);
                setAboutMe(initialAboutMe);
                setSkills(initialSkills);
                setTestimonials(initialTestimonials);
                setNewsArticles(initialNewsArticles);
            }
        } catch (error) {
            console.error("Failed to load data from localStorage, using initial data.", error);
            setProjects(initialProjects);
            setStats(initialStats);
            setAboutMe(initialAboutMe);
            setSkills(initialSkills);
            setTestimonials(initialTestimonials);
            setNewsArticles(initialNewsArticles);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (isLoaded) {
            try {
                const dataToSave = JSON.stringify({ projects, stats, aboutMe, skills, testimonials, newsArticles });
                localStorage.setItem(PORTFOLIO_DATA_KEY, dataToSave);
            } catch (error) {
                console.error("Failed to save data to localStorage", error);
            }
        }
    }, [projects, stats, aboutMe, skills, testimonials, newsArticles, isLoaded]);

    return {
        projects,
        setProjects,
        stats,
        setStats,
        aboutMe,
        setAboutMe,
        skills,
        setSkills,
        testimonials,
        setTestimonials,
        newsArticles,
        setNewsArticles,
        isLoaded
    };
};