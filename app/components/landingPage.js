"use client";

import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, Radio, RadioGroup, FormControlLabel, TextField, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const plans = [
  { name: 'Aetna', price: 50, logo: 'https://innovodetox.com/wp-content/uploads/2023/06/Aetna-Logo.png' },
  { name: 'Cigna', price: 100, logo: 'https://cdn.prod.website-files.com/5f8b3b580a028fb03a114a0c/5f9366b5fffdca4ecae3e2a4_Cigna%20logo.jpg' },
  { name: 'Medicaid', price: 500, logo: 'https://assets.zencare.co/content/2021/08/medicaid-1.png' },
  { name: 'Medicare', price: 500, logo: 'https://logos-world.net/wp-content/uploads/2021/02/Medicare-Logo.png' },
];

const LandingPage = () => {
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [providerType, setProviderType] = useState('Group');
  const [numberOfProviders, setNumberOfProviders] = useState(1);
  const [estimatedCost, setEstimatedCost] = useState(0);

  useEffect(() => {
    const totalPlanCost = selectedPlans.reduce((sum, planName) => {
      const planPrice = plans.find(plan => plan.name === planName)?.price || 0;
      return sum + planPrice;
    }, 0);
    setEstimatedCost(totalPlanCost * numberOfProviders);
  }, [selectedPlans, numberOfProviders]);

  const handlePlanSelection = (planName) => {
    setSelectedPlans(prevSelectedPlans => 
      prevSelectedPlans.includes(planName)
        ? prevSelectedPlans.filter(name => name !== planName)
        : [...prevSelectedPlans, planName]
    );
  };

  const handleIncrement = () => {
    setNumberOfProviders(prev => prev + 1);
  };

  const handleDecrement = () => {
    setNumberOfProviders(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setNumberOfProviders(value);
    }
  };

  return (
    <Box className="min-h-screen flex items-center justify-center">
      <Container className="container">
        <Typography variant="h4" className="typography text-4xl">
          Choose Your Plan
        </Typography>
        
        <Box display="flex" flexDirection="column" alignItems="center">
          {plans.map((plan) => (
            <Button
              key={plan.name}
              variant={selectedPlans.includes(plan.name) ? 'contained' : 'outlined'}
              onClick={() => handlePlanSelection(plan.name)}
              className={`button ${selectedPlans.includes(plan.name) ? 'bg-primary text-white' : 'border-primary text-primary'} text-base`}
            >
              <img
                src={plan.logo}
                alt={plan.name}
                className="img"
              />
              <Typography variant="p"> {plan.name} - ${plan.price} </Typography>
            
            </Button>
          ))}
        </Box>

        <Box mt={8} className="flex flex-col lg:flex-row lg:justify-between w-full gap-8">
          <Box className="flex-1 flex flex-col items-start space-y-4 lg:items-center lg:space-y-0">
            <Typography variant="h6" className="text-lg font-semibold text-gray-700">
              Provider Type
            </Typography>
            <RadioGroup
              aria-label="provider-type"
              name="provider-type"
              value={providerType}
              onChange={(e) => setProviderType(e.target.value)}
              row
              className="space-x-4 text-base"
            >
              <FormControlLabel value="Group" control={<Radio />} label="Group" className="text-gray-700 hover:text-primary transition-colors duration-300 text-base" />
              <FormControlLabel value="Solo" control={<Radio />} label="Solo" className="text-gray-700 hover:text-primary transition-colors duration-300 text-base" />
            </RadioGroup>
          </Box>
          
          <Box className="flex-1 flex flex-col items-start space-y-4 lg:items-center lg:space-y-0">
            <Typography variant="h6" className="text-lg font-semibold text-gray-700">
              Number of Providers:
            </Typography>
            <div className="circle-container flex items-center space-x-4">
              <IconButton onClick={handleDecrement} aria-label="decrement" className="icon-button left text-base">
                <Remove />
              </IconButton>
              <TextField
                type="number"
                value={numberOfProviders}
                onChange={handleInputChange}
                inputProps={{ min: 1 }}
                className="textfield-custom text-base"
              />
              <IconButton onClick={handleIncrement} aria-label="increment" className="icon-button right text-base">
                <Add />
              </IconButton>
            </div>
          </Box>
        </Box>

        <Box mt={8} className="estimated-cost">
          <div className="flex justify-between items-center">
            <Typography variant="h6" className="text-xl font-semibold mb-4 text-gray-700">
              Estimated Cost
            </Typography>
            <Typography variant="h4" className="font-bold text-4xl animate-gradient">
              ${estimatedCost}
            </Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
