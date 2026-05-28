import React from 'react'

import HeroSection from '../Home/HeroSection';
import HealingProgressCard from '../Home/HealingProgressCard';
import HeroImage from "../../../assets/Images/image.png";
import WellnessFeatures from './WellnessFeatures';
import HealingProgram from './HealingProgram';


const Sessions = () => {
    return (
        <div className="space-y-8 pb-10 w-full">
            <div className="flex justify-center flex-col md:flex-row gap-6 mb-8 w-full">

                <div className="relative flex flex-col gap-6 flex-1 min-w-0">
                    <HeroSection
                        image={HeroImage}
                        showBadge={true}
                        badgeText="Premium Programs"
                        title="Begin Your Guided Healing Journey"
                        subtitle="Step-by-step healing experiences designed to calm your mind"
                        description="and improve daily wellbeing."
                        primaryButtonText="Explore Programs"
                        secondaryButtonText="How It Works"
                    />
                    <WellnessFeatures />
                    <hr></hr>
                    <HealingProgram />
                </div>


                <div className="h-full flex flex-wrap gap-4 max-w-[300px]">
                    
                </div>

            </div>

        </div>
    );
};



export default Sessions;