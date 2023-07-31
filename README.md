[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11509573&assignment_repo_type=AssignmentRepo)
# RandomThingGen
A website to allow writers to randomly generate various things (characters, locations, objects, etc) when lacking inspiration.

## Team
- Carlos Velazquez, cavelazquez8
- Ian Kim, yanathan
- Seokha Kang, SeokhaSK
- Alison Stewart-Jones, JSJ-ucr

## Technologies
NodeJS, React, likely Express

## Major Features
- Randomly generate a description of a specific thing (e.g. person, location, object, etc.) from databases of relevant words.
- Save favorite descriptions to sidebar
- Download contents of sidebar as JSON
- Incorporate OpenAI libraries to generate with various prompts from user (location: altitude, temperature, location type, etc; person: age, gender, height, etc)
- Random writing prompt generator that incorporates items from other generators.
- Generation history (each new generated thing appears at the top of the page, so user can scroll down through things generated in the past)
- Generators branch off from each other (generate person who lives in generated location or object owned by generated person, etc)
- Change website theme, changing theme of prompts as well (fantasy/sci-fi/etc)
