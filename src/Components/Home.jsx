import React from 'react';

import Banner from './Banner';
import WhatDo from './WhatDo';
import BlockChainService from './BlockChainService';
import IndustriesServe from './IndustriesServe';
import CaseStudy from './CaseStudy';
import CollabrationCompany from './CollabrationCompany';
import FounderMengTeam from './FounderMengTeam';
import PopularBlockChain from './PopularBlockChain';
import NewArticels from './NewArticels';
import RoadMap from './RoadMap';

const Home = () => {


    return (
        <div>

            <section>

              <WhatDo/>
            </section>

              <section>
                <BlockChainService/>
              </section>


              <section>
                <IndustriesServe/>
              </section>

              <section>
                <CaseStudy/>
              </section>


              <section>
                <CollabrationCompany/>
              </section>
              

              <section>
                <RoadMap/>
              </section>


              <section>
                <FounderMengTeam/>
              </section>

              <section>
              <PopularBlockChain/>
                </section>


                <section>
                    <NewArticels/>
                </section>

            
        </div>
    );
};

export default Home;