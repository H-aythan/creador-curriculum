import React from "react";
import {Document,View,Page,Text,StyleSheet,Image,PDFViewer,Font}from '@react-pdf/renderer'

const Cv1 =({form})=>{
  const {firstName,lastName,address,phone,email,languages,
    skills,professionalSummary,employmentHistory,educations,occupation}=form;
 
  const styles = StyleSheet.create({
    page:{height:"685px",color:"black",padding:"15px 0px 15px",flexDirection:"column",alignItems:"center",display:"flex",
      
    },
    sectionNames:{width:"90%",height:"18%",lineHeight:"1",textAlign:"justify",
      fontSize:"20px",display:"flex",paddingTop:"12px",marginBottom:"10px",flexWrap:"wrap",
    },
    image:{border:"solid black 2px",width:"100px",height:"100px",padding:"15px",fontSize:"10px",textAlign:"center",marginRight:"10px",border:"2px solid black",},
    names:{overflow:"hidden",width:"70%",flexWrap:"wrap",
      height:"120px",margin:"10px",
    },
    sectionData:{width:"90%",flexGrow:"10",display:"flex",justifyContent:"space-between",flexWrap:"wrap",flexDirection:"row"},
    aside:{flexBasis:"25%",textAlign:"left",display:"flex",flexDirection:"column",},
    sectionInfo:{flexBasis:"70%",textAlign:"left",display:"flex",flexDirection:"column",wordBreak:"break-all"},
    SectionsGenerics:{display:"flex",flexDirection:"column",overflow:"hidden",width:"100%",
      margin:"5px 0px 2px",
    }
    
  });
  
  return( 
     
    <Document>
      <Page style={styles.page}>
        {/* firstname lastName photo occupation*/}
        <View style={styles.sectionNames}>
          <Text style={styles.image}>photo</Text>
          <View style={styles.names}>
            <View style={{width:"100%",flexDirection:"row",flexWrap:"wrap",fontSize:"25px"}}>
              <Text style={{marginRight:"5px",fontWeight:"100px"}}>{firstName}</Text>
              <Text style={{float:"left"}}>{lastName}</Text>
            </View>
            <Text style={{float:"left",width:"100%",fontSize:"22px",opacity:"0.7",marginTop:"5px"}}>{occupation}</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.sectionData}>
          {/* adrees phone email */}
          <View style={styles.aside}>
            <Text style={{borderBottom:"4px solid black",paddingBottom:"5px",width:"45px",fontSize:"25px"}}>Info</Text>
            <View style={styles.SectionsGenerics}>
              <Text style={{fontSize:"15px"}}>Adress</Text>
              <Text style={{fontSize:"12px",opacity:"0.8"}}>{address}</Text>
            </View>
            <View style={styles.SectionsGenerics}>
              <Text style={{fontSize:"15px"}}>Phone</Text>
              <Text style={{fontSize:"12px",opacity:"0.8"}}>{phone}</Text>
            </View>
            <View style={styles.SectionsGenerics}>
              <Text style={{fontSize:"15px"}}>Email</Text>
              <Text style={{fontSize:"12px",opacity:"0.8"}}>{email}</Text>
            </View>
            {/* language skills */}
            <Text style={{fontSize:"14px",marginTop:"10px",borderBottom:"4px solid black",paddingBottom:"5px",width:"70px"}}>Languages</Text>
            <View style={{width:"100%"}}>
              {languages.map(item=>{
                return<View style={{display:"flex",justifyContent:"space-between",margin:"5px 0px 5px" ,fontSize:"10px",flexDirection:"row",opacity:"0.8"}}>
                  <Text >{item.language}</Text>
                  <Text >{item.rating}</Text>  
                </View>
              })}
            </View>
            <Text style={{fontSize:"14px",borderBottom:"4px solid black",paddingBottom:"5px",width:"30px"}}>Skills</Text>
            <View style={{width:"100%",wordBreak:"break-all"}}>
              {skills.map(item=>{
                return<View style={{display:"flex",flexDirection:"column",margin:"5px 0px 5px",fontSize:"10px",opacity:"0.8"} }>
                  <Text >{item.skill}</Text>
                  <Text >{item.rating}</Text> 
                  <View>
                    {/* {skillsBar()} */}
                  </View> 
                
                </View>
              })}
            </View>
          </View>
          {/* employment education prfesionalSuumary*/}
          <View style={styles.sectionInfo}>
            <Text style={{fontSize:"18px",borderBottom:"4px solid black",paddingBottom:"5px"}}>Professional Summary</Text>
            <Text style={{fontSize:"12px",margin:"10px 0px 10px",opacity:"0.7"}}>{professionalSummary}</Text>
            
            <Text style={{fontSize:"18px",borderBottom:"4px solid black",paddingBottom:"5px"}}>Employment History</Text>
            {employmentHistory.map(item=>{
              return <View style={{flexDirection:"column",margin:"5px 0px 5px"}}>
                  <View style={{justifyContent:"space-between",fontSize:"10px",flexDirection:"row"}}>
                    <Text >{item.jobTitle}, {item.employer}</Text>
                    <Text style={{marginRight:"10px"}}>{item.begin}-{item.end}</Text>
                  </View>
                  <Text style={{fontSize:"10px",lineHeight:"1",opacity:"0.8"}}>
                    {item.description}
                  </Text>
              </View>
              })}
            <Text style={{fontSize:"18px",borderBottom:"4px solid black",paddingBottom:"5px"}}>Education History</Text>
            {educations.map(item=>{
              return <View style={{flexDirection:"column",marginTop:"5px"}}>
                  <View style={{flexDirection:"row",justifyContent:"space-between",fontSize:"10px"}}>
                    <Text >{item.school}, {item.degree}</Text>
                    <Text style={{marginRight:"10px"}}>{item.start}-{item.finish}</Text>
                  </View>
                  <Text style={{fontSize:"10px",lineHeight:"1",opacity:"0.8"}}>
                    {item.description}
                  </Text>
              </View>
              })}
          </View>

        </View>
      </Page>
    </Document>
    
  )}
 
export default Cv1;
