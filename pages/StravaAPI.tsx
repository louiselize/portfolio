// import React, { useState, useEffect } from 'react';

// function StravaApi() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [activities, setActivities] = useState<any[]>([]);

//   // Strava Credentials

//   // Use refresh token to get the current access token
//   useEffect(() => {
//     fetch(callRefresh, {
//       method: 'POST',
//     })
//       .then((res) => res.json())
//       .then((result) => getActivities(result.access_token));
//   }, [callRefresh]);

//   // Use the current access token to call all activities
//   function getActivities(access: string) {
//     fetch(callActivities + access)
//       .then((res) => res.json())
//       .then((data) => {
//         setActivities(data);
//         setIsLoading(false);
//       })
//       .catch((e) => console.log(e));
//   }

//   function showActivities() {
//     if (isLoading) return <>Chargement</>;
//     if (!isLoading) {
//       console.log(activities);
//       return activities.length;
//     }
//   }

//   return (
//     <div className="StravaApi">
//       {showActivities()}
//     </div>
//   );
// }

// export default StravaApi;
