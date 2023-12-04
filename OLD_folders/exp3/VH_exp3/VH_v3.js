/************** 
 * Vh_V3 *
 **************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'VH_v3';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.5, 0.5, 0.5]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(anketRoutineBegin());
flowScheduler.add(anketRoutineEachFrame());
flowScheduler.add(anketRoutineEnd());
const intro_xLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(intro_xLoopBegin(intro_xLoopScheduler));
flowScheduler.add(intro_xLoopScheduler);
flowScheduler.add(intro_xLoopEnd);


const practice_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_loopLoopBegin(practice_loopLoopScheduler));
flowScheduler.add(practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopEnd);




flowScheduler.add(InstractionRoutineBegin());
flowScheduler.add(InstractionRoutineEachFrame());
flowScheduler.add(InstractionRoutineEnd());
const test_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(test_loopLoopBegin(test_loopLoopScheduler));
flowScheduler.add(test_loopLoopScheduler);
flowScheduler.add(test_loopLoopEnd);




flowScheduler.add(Goodbye_screenRoutineBegin());
flowScheduler.add(Goodbye_screenRoutineEachFrame());
flowScheduler.add(Goodbye_screenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'intro.xlsx', 'path': 'intro.xlsx'},
    {'name': 'practice.xlsx', 'path': 'practice.xlsx'},
    {'name': 'task.xlsx', 'path': 'task.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.com/submissions/complete?cc=CC0KBFHH', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var anketClock;
var Welcome_screenClock;
var textWelcome;
var key_respwelcome;
var FixationClock;
var textFix;
var text;
var text_7;
var StudypracticeClock;
var text_p;
var key_respstudy;
var text_3;
var text_4;
var nCorr;
var rtList;
var FeedbackClock;
var corr;
var msg;
var msgColor;
var textfeedback;
var text_2;
var text_8;
var InstractionClock;
var textınstraction;
var key_respınstraction;
var TestTrialClock;
var trialCount;
var breakTrials;
var test_trial;
var key_respTest;
var text_5;
var text_6;
var PauseClock;
var text_pause;
var key_resp_xx;
var Goodbye_screenClock;
var text_goodbye;
var key_respgoodbye;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "anket"
  anketClock = new util.Clock();
  // Initialize components for Routine "Welcome_screen"
  Welcome_screenClock = new util.Clock();
  textWelcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'textWelcome',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_respwelcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Fixation"
  FixationClock = new util.Clock();
  textFix = new visual.TextStim({
    win: psychoJS.window,
    name: 'textFix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Kelime değildir: "z"',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Kelimedir: "m"',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Studypractice"
  StudypracticeClock = new util.Clock();
  text_p = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_p',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_respstudy = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Kelimedir: "m"',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Kelime değildir: "z"',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Run 'Begin Experiment' code from code
  nCorr = 0;
  rtList = [];
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from codefeedback
  corr = [];
  msg = "";
  msgColor = [];
  
  textfeedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'textfeedback',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Kelime değildir: "z"',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Kelimedir: "m"',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Instraction"
  InstractionClock = new util.Clock();
  textınstraction = new visual.TextStim({
    win: psychoJS.window,
    name: 'textınstraction',
    text: 'Asıl teste geçmektesiniz. Deneydeki göreviniz, ekrana çıkacak Türkçe sözcüklerin kelime olup olmadığını belirlemenizdir. Testte geri bildirim olmayacaktır.\nKelimedir: "m"\nKelime değildir: "z"\n\nTeste başlamak için BOŞLUK tuşuna basınız. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_respınstraction = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TestTrial"
  TestTrialClock = new util.Clock();
  // Run 'Begin Experiment' code from code_5
  trialCount = 0;
  breakTrials = [121, 241];
  
  test_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'test_trial',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  key_respTest = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Kelime değildir: "z"',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Kelimedir: "m"',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Pause"
  PauseClock = new util.Clock();
  text_pause = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_pause',
    text: 'Küçük bir mola verebilirsin. \n\n\nTeste devam etmek için BOŞLUK tuşuna bas. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_xx = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Goodbye_screen"
  Goodbye_screenClock = new util.Clock();
  text_goodbye = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_goodbye',
    text: 'Katıldığınız için teşekkür ederiz. :)\n\nBitirmek için BOŞLUK tuşuna basınız. \n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_respgoodbye = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var anketComponents;
function anketRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'anket' ---
    t = 0;
    anketClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('anket.started', globalClock.getTime());
    // keep track of which components have finished
    anketComponents = [];
    
    for (const thisComponent of anketComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function anketRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'anket' ---
    // get current time
    t = anketClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of anketComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function anketRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'anket' ---
    for (const thisComponent of anketComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('anket.stopped', globalClock.getTime());
    // the Routine "anket" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var intro_x;
function intro_xLoopBegin(intro_xLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    intro_x = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'intro.xlsx',
      seed: undefined, name: 'intro_x'
    });
    psychoJS.experiment.addLoop(intro_x); // add the loop to the experiment
    currentLoop = intro_x;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisIntro_x of intro_x) {
      snapshot = intro_x.getSnapshot();
      intro_xLoopScheduler.add(importConditions(snapshot));
      intro_xLoopScheduler.add(Welcome_screenRoutineBegin(snapshot));
      intro_xLoopScheduler.add(Welcome_screenRoutineEachFrame());
      intro_xLoopScheduler.add(Welcome_screenRoutineEnd(snapshot));
      intro_xLoopScheduler.add(intro_xLoopEndIteration(intro_xLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function intro_xLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(intro_x);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function intro_xLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practice_loop;
function practice_loopLoopBegin(practice_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice.xlsx',
      seed: undefined, name: 'practice_loop'
    });
    psychoJS.experiment.addLoop(practice_loop); // add the loop to the experiment
    currentLoop = practice_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_loop of practice_loop) {
      snapshot = practice_loop.getSnapshot();
      practice_loopLoopScheduler.add(importConditions(snapshot));
      practice_loopLoopScheduler.add(FixationRoutineBegin(snapshot));
      practice_loopLoopScheduler.add(FixationRoutineEachFrame());
      practice_loopLoopScheduler.add(FixationRoutineEnd(snapshot));
      practice_loopLoopScheduler.add(StudypracticeRoutineBegin(snapshot));
      practice_loopLoopScheduler.add(StudypracticeRoutineEachFrame());
      practice_loopLoopScheduler.add(StudypracticeRoutineEnd(snapshot));
      practice_loopLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      practice_loopLoopScheduler.add(FeedbackRoutineEachFrame());
      practice_loopLoopScheduler.add(FeedbackRoutineEnd(snapshot));
      practice_loopLoopScheduler.add(practice_loopLoopEndIteration(practice_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var test_loop;
function test_loopLoopBegin(test_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'task.xlsx',
      seed: undefined, name: 'test_loop'
    });
    psychoJS.experiment.addLoop(test_loop); // add the loop to the experiment
    currentLoop = test_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTest_loop of test_loop) {
      snapshot = test_loop.getSnapshot();
      test_loopLoopScheduler.add(importConditions(snapshot));
      test_loopLoopScheduler.add(FixationRoutineBegin(snapshot));
      test_loopLoopScheduler.add(FixationRoutineEachFrame());
      test_loopLoopScheduler.add(FixationRoutineEnd(snapshot));
      test_loopLoopScheduler.add(TestTrialRoutineBegin(snapshot));
      test_loopLoopScheduler.add(TestTrialRoutineEachFrame());
      test_loopLoopScheduler.add(TestTrialRoutineEnd(snapshot));
      test_loopLoopScheduler.add(PauseRoutineBegin(snapshot));
      test_loopLoopScheduler.add(PauseRoutineEachFrame());
      test_loopLoopScheduler.add(PauseRoutineEnd(snapshot));
      test_loopLoopScheduler.add(test_loopLoopEndIteration(test_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function test_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _key_respwelcome_allKeys;
var Welcome_screenComponents;
function Welcome_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome_screen' ---
    t = 0;
    Welcome_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Welcome_screen.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_2
    /* Syntax Error: Fix Python code */
    textWelcome.setText(Introduction);
    key_respwelcome.keys = undefined;
    key_respwelcome.rt = undefined;
    _key_respwelcome_allKeys = [];
    // keep track of which components have finished
    Welcome_screenComponents = [];
    Welcome_screenComponents.push(textWelcome);
    Welcome_screenComponents.push(key_respwelcome);
    
    for (const thisComponent of Welcome_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Welcome_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome_screen' ---
    // get current time
    t = Welcome_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textWelcome* updates
    if (t >= 0.0 && textWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textWelcome.tStart = t;  // (not accounting for frame time here)
      textWelcome.frameNStart = frameN;  // exact frame index
      
      textWelcome.setAutoDraw(true);
    }
    
    
    // *key_respwelcome* updates
    if (t >= 0.0 && key_respwelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_respwelcome.tStart = t;  // (not accounting for frame time here)
      key_respwelcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_respwelcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_respwelcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_respwelcome.clearEvents(); });
    }
    
    if (key_respwelcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_respwelcome.getKeys({keyList: ['space'], waitRelease: false});
      _key_respwelcome_allKeys = _key_respwelcome_allKeys.concat(theseKeys);
      if (_key_respwelcome_allKeys.length > 0) {
        key_respwelcome.keys = _key_respwelcome_allKeys[_key_respwelcome_allKeys.length - 1].name;  // just the last key pressed
        key_respwelcome.rt = _key_respwelcome_allKeys[_key_respwelcome_allKeys.length - 1].rt;
        key_respwelcome.duration = _key_respwelcome_allKeys[_key_respwelcome_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Welcome_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Welcome_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome_screen' ---
    for (const thisComponent of Welcome_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Welcome_screen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_respwelcome.corr, level);
    }
    psychoJS.experiment.addData('key_respwelcome.keys', key_respwelcome.keys);
    if (typeof key_respwelcome.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_respwelcome.rt', key_respwelcome.rt);
        psychoJS.experiment.addData('key_respwelcome.duration', key_respwelcome.duration);
        routineTimer.reset();
        }
    
    key_respwelcome.stop();
    // the Routine "Welcome_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FixationComponents;
function FixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fixation' ---
    t = 0;
    FixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Fixation.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_3
    /* Syntax Error: Fix Python code */
    // keep track of which components have finished
    FixationComponents = [];
    FixationComponents.push(textFix);
    FixationComponents.push(text);
    FixationComponents.push(text_7);
    
    for (const thisComponent of FixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function FixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fixation' ---
    // get current time
    t = FixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textFix* updates
    if (t >= 0.0 && textFix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textFix.tStart = t;  // (not accounting for frame time here)
      textFix.frameNStart = frameN;  // exact frame index
      
      textFix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textFix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textFix.setAutoDraw(false);
    }
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fixation' ---
    for (const thisComponent of FixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Fixation.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_respstudy_allKeys;
var StudypracticeComponents;
function StudypracticeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Studypractice' ---
    t = 0;
    StudypracticeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Studypractice.started', globalClock.getTime());
    text_p.setText(target_p);
    key_respstudy.keys = undefined;
    key_respstudy.rt = undefined;
    _key_respstudy_allKeys = [];
    // Run 'Begin Routine' code from code
    corr = (- 1);
    
    // keep track of which components have finished
    StudypracticeComponents = [];
    StudypracticeComponents.push(text_p);
    StudypracticeComponents.push(key_respstudy);
    StudypracticeComponents.push(text_3);
    StudypracticeComponents.push(text_4);
    
    for (const thisComponent of StudypracticeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function StudypracticeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Studypractice' ---
    // get current time
    t = StudypracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_p* updates
    if (t >= 0.0 && text_p.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_p.tStart = t;  // (not accounting for frame time here)
      text_p.frameNStart = frameN;  // exact frame index
      
      text_p.setAutoDraw(true);
    }
    
    
    // *key_respstudy* updates
    if (t >= 0.0 && key_respstudy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_respstudy.tStart = t;  // (not accounting for frame time here)
      key_respstudy.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_respstudy.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_respstudy.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_respstudy.clearEvents(); });
    }
    
    if (key_respstudy.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_respstudy.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_respstudy_allKeys = _key_respstudy_allKeys.concat(theseKeys);
      if (_key_respstudy_allKeys.length > 0) {
        key_respstudy.keys = _key_respstudy_allKeys[_key_respstudy_allKeys.length - 1].name;  // just the last key pressed
        key_respstudy.rt = _key_respstudy_allKeys[_key_respstudy_allKeys.length - 1].rt;
        key_respstudy.duration = _key_respstudy_allKeys[_key_respstudy_allKeys.length - 1].duration;
        // was this correct?
        if (key_respstudy.keys == CorrAns_p) {
            key_respstudy.corr = 1;
        } else {
            key_respstudy.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of StudypracticeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var rt;
function StudypracticeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Studypractice' ---
    for (const thisComponent of StudypracticeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Studypractice.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_respstudy.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns_p)) {
         key_respstudy.corr = 1;  // correct non-response
      } else {
         key_respstudy.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_respstudy.corr, level);
    }
    psychoJS.experiment.addData('key_respstudy.keys', key_respstudy.keys);
    psychoJS.experiment.addData('key_respstudy.corr', key_respstudy.corr);
    if (typeof key_respstudy.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_respstudy.rt', key_respstudy.rt);
        psychoJS.experiment.addData('key_respstudy.duration', key_respstudy.duration);
        routineTimer.reset();
        }
    
    key_respstudy.stop();
    // Run 'End Routine' code from code
    if (key_respstudy.corr) {
        nCorr = (nCorr + 1);
    }
    rtList.push(key_respstudy.rt);
    corr = key_respstudy.corr;
    rt = key_respstudy.rt;
    psychoJS.experiment.addData("rt", rt);
    psychoJS.experiment.addData("corr", corr);
    
    // the Routine "Studypractice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback' ---
    t = 0;
    FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Feedback.started', globalClock.getTime());
    // Run 'Begin Routine' code from codefeedback
    if ((rt < 2)) {
        if ((corr === 1)) {
            msg = "DO\u011eRU !";
            msgColor = "black";
        } else {
            msg = "YANLI\u015e !";
            msgColor = "black";
        }
    } else {
        msg = "YAVA\u015e CEVAP !";
        msgColor = "black";
    }
    
    textfeedback.setColor(new util.Color(msgColor));
    textfeedback.setText(msg);
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(textfeedback);
    FeedbackComponents.push(text_2);
    FeedbackComponents.push(text_8);
    
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback' ---
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textfeedback* updates
    if (t >= 0.0 && textfeedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textfeedback.tStart = t;  // (not accounting for frame time here)
      textfeedback.frameNStart = frameN;  // exact frame index
      
      textfeedback.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textfeedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textfeedback.setAutoDraw(false);
    }
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback' ---
    for (const thisComponent of FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Feedback.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_respınstraction_allKeys;
var InstractionComponents;
function InstractionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instraction' ---
    t = 0;
    InstractionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instraction.started', globalClock.getTime());
    key_respınstraction.keys = undefined;
    key_respınstraction.rt = undefined;
    _key_respınstraction_allKeys = [];
    // keep track of which components have finished
    InstractionComponents = [];
    InstractionComponents.push(textınstraction);
    InstractionComponents.push(key_respınstraction);
    
    for (const thisComponent of InstractionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstractionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instraction' ---
    // get current time
    t = InstractionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textınstraction* updates
    if (t >= 0.0 && textınstraction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textınstraction.tStart = t;  // (not accounting for frame time here)
      textınstraction.frameNStart = frameN;  // exact frame index
      
      textınstraction.setAutoDraw(true);
    }
    
    
    // *key_respınstraction* updates
    if (t >= 0.0 && key_respınstraction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_respınstraction.tStart = t;  // (not accounting for frame time here)
      key_respınstraction.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_respınstraction.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_respınstraction.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_respınstraction.clearEvents(); });
    }
    
    if (key_respınstraction.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_respınstraction.getKeys({keyList: ['space'], waitRelease: false});
      _key_respınstraction_allKeys = _key_respınstraction_allKeys.concat(theseKeys);
      if (_key_respınstraction_allKeys.length > 0) {
        key_respınstraction.keys = _key_respınstraction_allKeys[_key_respınstraction_allKeys.length - 1].name;  // just the last key pressed
        key_respınstraction.rt = _key_respınstraction_allKeys[_key_respınstraction_allKeys.length - 1].rt;
        key_respınstraction.duration = _key_respınstraction_allKeys[_key_respınstraction_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstractionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstractionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instraction' ---
    for (const thisComponent of InstractionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instraction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_respınstraction.corr, level);
    }
    psychoJS.experiment.addData('key_respınstraction.keys', key_respınstraction.keys);
    if (typeof key_respınstraction.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_respınstraction.rt', key_respınstraction.rt);
        psychoJS.experiment.addData('key_respınstraction.duration', key_respınstraction.duration);
        routineTimer.reset();
        }
    
    key_respınstraction.stop();
    // the Routine "Instraction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_respTest_allKeys;
var TestTrialComponents;
function TestTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TestTrial' ---
    t = 0;
    TestTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('TestTrial.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_5
    trialCount = (trialCount + 1);
    
    test_trial.setText(target);
    key_respTest.keys = undefined;
    key_respTest.rt = undefined;
    _key_respTest_allKeys = [];
    // keep track of which components have finished
    TestTrialComponents = [];
    TestTrialComponents.push(test_trial);
    TestTrialComponents.push(key_respTest);
    TestTrialComponents.push(text_5);
    TestTrialComponents.push(text_6);
    
    for (const thisComponent of TestTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TestTrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TestTrial' ---
    // get current time
    t = TestTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test_trial* updates
    if (t >= 0.0 && test_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_trial.tStart = t;  // (not accounting for frame time here)
      test_trial.frameNStart = frameN;  // exact frame index
      
      test_trial.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (test_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      test_trial.setAutoDraw(false);
    }
    
    // *key_respTest* updates
    if (t >= 0.0 && key_respTest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_respTest.tStart = t;  // (not accounting for frame time here)
      key_respTest.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_respTest.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_respTest.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_respTest.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_respTest.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_respTest.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_respTest.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_respTest.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_respTest_allKeys = _key_respTest_allKeys.concat(theseKeys);
      if (_key_respTest_allKeys.length > 0) {
        key_respTest.keys = _key_respTest_allKeys[_key_respTest_allKeys.length - 1].name;  // just the last key pressed
        key_respTest.rt = _key_respTest_allKeys[_key_respTest_allKeys.length - 1].rt;
        key_respTest.duration = _key_respTest_allKeys[_key_respTest_allKeys.length - 1].duration;
        // was this correct?
        if (key_respTest.keys == CorrAns) {
            key_respTest.corr = 1;
        } else {
            key_respTest.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TestTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TestTrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TestTrial' ---
    for (const thisComponent of TestTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TestTrial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_respTest.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns)) {
         key_respTest.corr = 1;  // correct non-response
      } else {
         key_respTest.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_respTest.corr, level);
    }
    psychoJS.experiment.addData('key_respTest.keys', key_respTest.keys);
    psychoJS.experiment.addData('key_respTest.corr', key_respTest.corr);
    if (typeof key_respTest.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_respTest.rt', key_respTest.rt);
        psychoJS.experiment.addData('key_respTest.duration', key_respTest.duration);
        routineTimer.reset();
        }
    
    key_respTest.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_xx_allKeys;
var PauseComponents;
function PauseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pause' ---
    t = 0;
    PauseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Pause.started', globalClock.getTime());
    key_resp_xx.keys = undefined;
    key_resp_xx.rt = undefined;
    _key_resp_xx_allKeys = [];
    // keep track of which components have finished
    PauseComponents = [];
    PauseComponents.push(text_pause);
    PauseComponents.push(key_resp_xx);
    
    for (const thisComponent of PauseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
function PauseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pause' ---
    // get current time
    t = PauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_4
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! _pj.in_es6(trialCount, breakTrials))) {
        continueRoutine = false;
    }
    
    
    // *text_pause* updates
    if (t >= 0.0 && text_pause.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_pause.tStart = t;  // (not accounting for frame time here)
      text_pause.frameNStart = frameN;  // exact frame index
      
      text_pause.setAutoDraw(true);
    }
    
    
    // *key_resp_xx* updates
    if (t >= 0.0 && key_resp_xx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_xx.tStart = t;  // (not accounting for frame time here)
      key_resp_xx.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_xx.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_xx.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_xx.clearEvents(); });
    }
    
    if (key_resp_xx.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_xx.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_xx_allKeys = _key_resp_xx_allKeys.concat(theseKeys);
      if (_key_resp_xx_allKeys.length > 0) {
        key_resp_xx.keys = _key_resp_xx_allKeys[_key_resp_xx_allKeys.length - 1].name;  // just the last key pressed
        key_resp_xx.rt = _key_resp_xx_allKeys[_key_resp_xx_allKeys.length - 1].rt;
        key_resp_xx.duration = _key_resp_xx_allKeys[_key_resp_xx_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PauseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PauseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pause' ---
    for (const thisComponent of PauseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Pause.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_xx.corr, level);
    }
    psychoJS.experiment.addData('key_resp_xx.keys', key_resp_xx.keys);
    if (typeof key_resp_xx.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_xx.rt', key_resp_xx.rt);
        psychoJS.experiment.addData('key_resp_xx.duration', key_resp_xx.duration);
        routineTimer.reset();
        }
    
    key_resp_xx.stop();
    // the Routine "Pause" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_respgoodbye_allKeys;
var Goodbye_screenComponents;
function Goodbye_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Goodbye_screen' ---
    t = 0;
    Goodbye_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Goodbye_screen.started', globalClock.getTime());
    key_respgoodbye.keys = undefined;
    key_respgoodbye.rt = undefined;
    _key_respgoodbye_allKeys = [];
    // keep track of which components have finished
    Goodbye_screenComponents = [];
    Goodbye_screenComponents.push(text_goodbye);
    Goodbye_screenComponents.push(key_respgoodbye);
    
    for (const thisComponent of Goodbye_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Goodbye_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Goodbye_screen' ---
    // get current time
    t = Goodbye_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_goodbye* updates
    if (t >= 0.0 && text_goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_goodbye.tStart = t;  // (not accounting for frame time here)
      text_goodbye.frameNStart = frameN;  // exact frame index
      
      text_goodbye.setAutoDraw(true);
    }
    
    
    // *key_respgoodbye* updates
    if (t >= 0.0 && key_respgoodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_respgoodbye.tStart = t;  // (not accounting for frame time here)
      key_respgoodbye.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_respgoodbye.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_respgoodbye.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_respgoodbye.clearEvents(); });
    }
    
    if (key_respgoodbye.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_respgoodbye.getKeys({keyList: ['space'], waitRelease: false});
      _key_respgoodbye_allKeys = _key_respgoodbye_allKeys.concat(theseKeys);
      if (_key_respgoodbye_allKeys.length > 0) {
        key_respgoodbye.keys = _key_respgoodbye_allKeys[_key_respgoodbye_allKeys.length - 1].name;  // just the last key pressed
        key_respgoodbye.rt = _key_respgoodbye_allKeys[_key_respgoodbye_allKeys.length - 1].rt;
        key_respgoodbye.duration = _key_respgoodbye_allKeys[_key_respgoodbye_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Goodbye_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Goodbye_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Goodbye_screen' ---
    for (const thisComponent of Goodbye_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Goodbye_screen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_respgoodbye.corr, level);
    }
    psychoJS.experiment.addData('key_respgoodbye.keys', key_respgoodbye.keys);
    if (typeof key_respgoodbye.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_respgoodbye.rt', key_respgoodbye.rt);
        psychoJS.experiment.addData('key_respgoodbye.duration', key_respgoodbye.duration);
        routineTimer.reset();
        }
    
    key_respgoodbye.stop();
    // the Routine "Goodbye_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
