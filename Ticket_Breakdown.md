
# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

  

- Data is saved in the database in the Facilities, Agents, and Shifts tables

- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each

- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

  

## You've been asked to work on a ticket. It reads:

  

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

  
  

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

  
  

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

  

## Your Breakdown Here

### Tickets
#### #1 Add a new field/column `custom_id` to the agents tabel
Create a migration to the agents database table to add a new column called custom_id that can accept `char(256)`.

Update our agent data model to include that field.

**Estimation:** 1-2h

#### #2 Update the agent create/update APIs to contain the new custom id field
On our backend, update the APIs responsible for creating and updating agent to contain the new field.

Create new two APIs to create and update that field individually.

**Estimation:** 2h-3h

#### #3 Add a new field on the facility web interface to add/update the agent custom id
**Acceptance Criteria:**
The facilty web interface should have a new textfield that accepts string with certain length (assume 256) when creating or updating the agent info/data.

The field should be validated.

**Implementation Details:**
Update the facility interface (create agent/update agent) pages to include the new textfield.

**Estimation:** 1h

#### #4 Display the custom id on generated reports

**Acceptance Criteria:**
Generated reports should contain both the custom id if found and the internal id as well.

**Implementation:**
Update the `generateReport` function to display the custom ids to the generated PDF.

**Estimation:** 1h
