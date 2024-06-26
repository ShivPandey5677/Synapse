import React from 'react'
import BloodHero from '../../components/BloodBank/BloodHero'
import DonateBlood from '../../components/BloodBank/DonateBlood'
import HostCamp from '../../components/BloodBank/HostCamp'
import Volunteer from '../../components/BloodBank/Volunteer'
import BBNavbar from '../../components/BloodBank/BBNavbar'
import BloodBankPage from '../../components/BloodBank/BloodHero'
import HostBloodBankForm from '../../components/BloodBank/HostBloodBankForm'
import BloodStats from '../../components/BloodBank/BloodStats'

const BloodHome = () => {
  return (
    <div>
      <BBNavbar/>
    <div className="flex flex-col justify-center">
     <BloodBankPage/>
     <BloodStats/>
     <DonateBlood/>
     <HostCamp/>
     <Volunteer/>
    </div>
    </div>
  )
}

export default BloodHome
