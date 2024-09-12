## DAT250 Expass 3 Report
For this expass I choose to use Svelte, as I already had some expirience with it, and made a simple frontend for the backend API that I made for the last expass, expass 2.
This application let´s you create a user, a poll and vote for createed polls.

## Technical problems that you encountered during the task
I didn´t encounter any major problems during the task, possibly the hardest part of the expass was to handle login and the userId. But I managed to solve this with svelte store. 

## Link to your code for experiments 1-2 above
Frontend code:
https://github.com/KaroGil/DAT250-A3/tree/main/assignment3-frontend

Backend code:
https://github.com/KaroGil/DAT250/tree/assignment3

## Any pending issues with this assignment which you did not manage to solve
There are some issues with identification and actions based on identification. So a user can now delete another uses poll which is suboptimal but other than that the polls are connected to the users so it shouldnt be too hard to fix. As well as a user can see all polls, both public and private. I do not have a check for wether the user is invited to the private poll or not. A use can also vote multiple times on polls. So I as a user can vote for A 30 times if i please. 
