import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useTravelApi from '../hooks/useTravelApi';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoadingWrapper from '../components/loading/LoadingWrapper';
import DescriptionIcon from '@mui/icons-material/Description';
import CostIcon from '@mui/icons-material/AttachMoney';
import NotesIcon from '@mui/icons-material/Notes';

const ActivitiesDetails = () => {
  const { travelPlanId } = useParams();
  const { token } = useAuth();
  const {
    getTravelPlanData,
    isLoading,
    isError,
    error,
    travelPlanById,
  } = useTravelApi();
  
  const [plan, setPlan] = useState();

  useEffect(() => {
    getTravelPlanData(travelPlanId, token);
  }, [travelPlanId, token]);

  useEffect(() => {
      if (travelPlanById?.travelPlan) {
        setPlan(travelPlanById.travelPlan);
      }
    }, [travelPlanById?.travelPlan]);
  
  const InfoActivity = ({ icon: Icon, label, value }) => (
    <Box display="flex" alignItems="flex-start" gap={1}>
      <Icon fontSize="small" color="action" />
      <Typography variant="body1" align="justify">
        <strong>{label}:</strong> {value || 'N/A'}
      </Typography>
    </Box>
  );

  return (
    <Box>
      <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
        <Typography
          variant="h5"
          color="primary.main"
          sx={{ mb: 2 }}
          textAlign="center"
        >
          {plan?.destination}
        </Typography>

        {plan?.aiGenTravelPlan?.Activities?.map((item, index) => (
          <Accordion key={`accordion-${index}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${item?.Day} day activities`}
            >
              <Typography
                component="span"
                sx={{
                  color: 'primary.main',
                  width: '30%',
                  flexShrink: 0,
                  fontWeight: 'bold',
                }}
              >
                {`${item?.Day} day`}
              </Typography>
              <Typography component="span" color="text.secondary">
                {`${item?.Date}`}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item?.Activities?.map((activity, index) => (
                <Box key={`box-${index}`} marginBottom={1}>
                  <Typography color="text.secondary">
                    <AccessTimeIcon sx={{ color: 'primary.main', mr: 1 }} />
                    {`Time: ${activity?.Time}`}
                  </Typography>
                  <InfoActivity icon={DescriptionIcon} label={'Description'} value={activity?.Description}/>
                  <InfoActivity icon={CostIcon} label={'Cost'} value={activity?.Cost}/>
                  <InfoActivity icon={NotesIcon} label={'Notes'} value={activity?.Notes}/>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </LoadingWrapper>
    </Box>
  );

};

export default ActivitiesDetails;
