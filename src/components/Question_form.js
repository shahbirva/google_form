import {useState,useEffect} from 'react';
import "../App.css"
import CropOriginalIcon from '@material-ui/icons/CropOriginal'
import { Select, Switch, IconButton, Accordion, AccordionDetails, Radio, Button, FormControlLabel, Typography, MenuItem } from '@material-ui/core'
import CheckboxIcon from '@material-ui/core/Checkbox'
import { AccordionSummary } from '@material-ui/core';
import ShortTextIcon from '@material-ui/icons/ShortText'
import SubjectIcon from '@material-ui/icons/Subject'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { BsTrash } from 'react-icons/bs'
import FilterNoneIcon  from '@material-ui/icons/FilterNone'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import OnDemandVideoIcon from '@material-ui/icons/OndemandVideo'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import { BsFileText } from 'react-icons/bs'
import {FcRightUp} from 'react-icons/fc'
import CloseIcon from '@material-ui/icons/Close'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const Question_form = () => {
    const [questions, setQuestions] = useState(
        [{questionText:"Which is the Capital city of Gujarat ?",
        questionType:"radio",
        options:[
            {optionText: "Baroda"},
            {optionText: "Ahmedabad"},
            {optionText: "Surat"},
            {optionText: "Vadodara"}
        ],
        open:true,
        require:false}]
    )

    const changeQuestion = (text,i) => {
        const newQuestion = [...questions];
        newQuestion[i].questionText=text;
        setQuestions(newQuestion);
        console.log(newQuestion)
    }

    const changeOptionValue = (text,i,j) =>{
        let optionsQuestion = [...questions];
        optionsQuestion[i].options[j].optionText=text;
        setQuestions(optionsQuestion);
    }

    const copyQuestion = (i) =>{
        // expandColseAll();
        let qs =[...questions];
        let newQuestion = {...qs[i]};
        setQuestions([...questions,newQuestion])
    }

    const deleteQuestion = (i)=>{
        let qs =[...questions];
        if(questions.length>1){
            qs.splice(i,1);
        }
        setQuestions(qs);
    }

    const requiredQuestion= (i) =>{
        let reqQuestion = [...questions];
        reqQuestion[i].required = ! reqQuestion[i].required;
        setQuestions(reqQuestion);
    }

    const addMoreQuestion= () =>{
        // expandColseAll();
        setQuestions([...questions,
        {questionText:"Question",questionType:"radio",options:[{optionText:"option 1"}], open:true,required:false}]);
    }

    const addQuestionType = (i,type) =>{
        let qs =[...questions];
        console.log(type);
        qs[i].questionType=type;
        setQuestions(qs);
    }

    const removeOption = (i,j) =>{
        let RemoveOptionQuestion =[...questions];
        RemoveOptionQuestion[i].options.splice(j,1);
        setQuestions(RemoveOptionQuestion);
    }

    const addOption = (i) =>{
        let OptionQuestion =[...questions];
        if(OptionQuestion[i].options.length < 5){
            OptionQuestion[i].options.push({optionText:"Option" + (OptionQuestion[i].options.length+1)})
        }else{
            console.log("Max 5 options")
        }
        setQuestions(OptionQuestion);
    }

    const onDragEnd= (result) =>{
        if(!result.destination){
            return;
        }
        let itemgg = [...questions];
        const itemF = reorder(
            itemgg,
            result.source.index,
            result.destination.index
        );
        setQuestions(itemF);
    }

    const reorder=(list,startIndex,endIndex) =>{
        const result = Array.from(list);
        const [removed] = result.splice(startIndex,1);
        result.splice(endIndex,0,removed);
        return result;
    }

    const expandColseAll = () =>{
        let qs =[...questions];
        for(let j=0; j<qs.length; j++){
            qs[j].open = false;
        }
        setQuestions(qs);
    }

    const handleExpand = (i) => {
        let qs =[...questions];
        for(let j=0; j<qs.length; j++){
            if(i === j){
                qs[i].open = true;
            }else{
                qs[j].open = false;
            }
        }
        setQuestions(qs);
    }

    const questionsUI = () =>{
        return questions.map((ques,i) => (
            <Draggable key={i} draggableId={i+"id"} index={i}>
                {(provided,snapshot) => (
                    <div 
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <div>
                        <div style={{marginBottom:"0px"}}>
                            <div style={{width:"100%",marginBottom:"0px"}}>
                                <DragIndicatorIcon style={{transform:"rotate(-90deg)",color:"#dae0e2",position:"relative",left:"300px"}} fontSize="small"/>
                            </div>
                            <div>
                <Accordion expanded={questions[i].open} onchange={()=>{handleExpand(i)}} className={questions[i].open ? "add_border" : ""}>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" elevation={1} style={{width:'100%'}}>
                    {! questions[i].open ? (
                        <div className="saved_questions">
                            <Typography style={{fontSize:"15px",fontWeight:"400",letterSpacing:".1px",lineHeight:"24px",paddingBottom:"8px"}}>
                                {i+1}. {questions[i].questionText}
                            </Typography>

                            {ques.options.map((op,j) => (
                                <div key={j}>
                                <div style ={{display:"flex"}}>
                                <FormControlLabel style={{marginLeft:"5px", marginBottom:"5px"}} disabled control={<input type={ques.questionType} 
                                color="primary" style={{marginRight:"3px"}} required={ques.type}/>} label ={
                                    <Typography style={{fontFamily: 'Robot,Arial,sans-serif',
                                        fontSize:"13px",
                                        fontWeight:"400",
                                        letterSpacing:".2px",
                                        lineHeight:"20px",
                                        color:"#202124"}}>
                                        {ques.options[j].optionText}
                                    </Typography>
                                }/>
                                </div>
                                </div>
                            ))}
                            </div>
                    ):""}
                    </AccordionSummary>
                    {questions[i].open ? (
                    <div className="question_boxes">
                        <AccordionDetails className="add_question">
                            <div className="add_question_top">
                                <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e) => {changeQuestion(e.target.value,i)}}/>
                                <CropOriginalIcon style={{color:"#5f6368"}}/>
                                <Select className="select" styele={{color:"#5f6368",fontSize:"13px"}}>
                                    <MenuItem id="text" value="text" onClick={()=>{addQuestionType(i,"text")}}><SubjectIcon style={{marginRight:"10px"}}/>Paragraph</MenuItem>
                                    <MenuItem id="checkbox" value="Checkbox" onClick={()=>{addQuestionType(i,"checkbox")}}><CheckboxIcon style={{marginRight:"10px",color:"#70757a"}} checked />Checkboxes</MenuItem>
                                    <MenuItem id="radio" value="Radio" onClick={()=>{addQuestionType(i,"radio")}}><Radio style={{marginRight:"10px",color:"#70757a"}} checked />Multiple Choice</MenuItem>
                                </Select>
                            </div> 
                            {ques.options.map((op,j) => (
                                <div className="add_question_body" key={j}>
                                    {
                                        (ques.questionType!=="text")?
                                        <input type={ques.questionType} style={{marginRight:"10px"}}/>:
                                        <ShortTextIcon style={{marginRight:"10px"}}/>
                                    }
                                    <div>
                                        <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} onChange={(e) => {changeOptionValue(e.target.value,i,j)}}/>
                                    </div>
                                    <CropOriginalIcon style={{color:"#5f6368"}}/>
                                    <IconButton arial-label="delete">
                                        <CloseIcon onClick={()=>{removeOption(i,j)}}/>
                                    </IconButton>
                                </div>
                            ))}

                            {ques.options.length < 5 ? (
                                <div className="add_question_body">
                                    <FormControlLabel disabled control={
                                        (ques.questionType!=="text")?
                                        <input type={ques.questionType} color="primary" inputprops={{'arial-label':'secondary checkbox'}} 
                                        style={{marginRight:"10px",marginLeft:"10px"}} disabled/>:
                                        <ShortTextIcon style={{marginRight:"10px"}}/>
                                    }label={
                                        <div>
                                            <input type="text" className="text_input" placeholder="Add other" style={{fontSize:"13px",width:"60px"}}/>
                                            <Button size="small" onClick={()=>{addOption(i)}} style={{textTransform:"none",color:"#4285f4",fontSize:"13px",fontWeight:"600"}}>Add Option</Button>
                                        </div>
                                    }/>
                                </div>
                            ):" "}


                            <div className="add_footer">
                                <div className="add_question_bottom_left">
                                    <Button size="small" style={{textTransform:"none",color:"#4285f4",fontSize:"13px",fontWeight:"600"}}>
                                        <FcRightUp style={{border:"2px solid #4285f4",padding:"2px",marginRight:"8px"}}/>Answer Key
                                    </Button>
                                </div>
                                <div className="add_question_bottom">
                                    <IconButton aria-label="copy" onClick={()=>{copyQuestion(i)}}>
                                        <FilterNoneIcon/>
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={()=>{deleteQuestion(i)}}>
                                        <BsTrash/>
                                    </IconButton>
                                    <span style={{color:"#5f6368", fontSize:"13px"}}>Required</span><Switch name="checkedA" color="primary" onClick={()=>{requiredQuestion(i)}} check/>
                                    <IconButton>
                                        <MoreVertIcon/>
                                    </IconButton>
                                </div>
                            </div>
                        </AccordionDetails>
                        <div className="question_edit">
                            <AddCircleOutlineIcon className="edit" onClick={()=>{addMoreQuestion()}}/>
                            <OnDemandVideoIcon className="edit"/>
                            <CropOriginalIcon className="edit"/>
                            <TextFieldsIcon className="edit"/>
                        </div>
                    </div>):" "}
                </Accordion>
            </div>
                        </div>
                    </div>
                    </div>
                )}
            </Draggable>
        ))
    }

    return (
        <>
        <div className="question_form">
            <br></br>
            <div className="section">
                <div className="question_title_section">
                    <div className="question_form_top">
                        <input type="text" className="question_form_top_name" style={{color:"black"}} placeholder="Untitled document"/>
                        <input type="text" className="question_form_top_desc"placeholder="Form Description"/>
                    </div>
                </div>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided,snapshot)=> (
                            <div 
                            {...provided.droppableProps}
                            ref={provided.innerRef}>

                                {questionsUI()}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
               
            </div>
        </div>
        </>
    )
}

export default Question_form
