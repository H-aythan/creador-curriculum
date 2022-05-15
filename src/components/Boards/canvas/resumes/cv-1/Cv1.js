import React from "react";
import {Document,View,Page,Text,StyleSheet,Image}from '@react-pdf/renderer'
const Cv1 =({form})=>{
  const {firstName,lastName,address,phone,email,languages,
    skills,professionalSummary,employmentHistory,educations,occupation}=form;
 
  const styles = StyleSheet.create({
    page:{height:"585px",color:"black",paddingTop:"10px",display:"flex",flexDirection:"column",alignItems:"center",
      fontWeight:"800"
    },
    sectionNames:{width:"90%",lineHeight:"1",textAlign:"justify",
      fontSize:"20px",display:"flex",paddingTop:"12px",marginBottom:"10px",
    },
    image:{border:"solid black 2px",width:"50px",height:"50px",padding:"15px",fontSize:"10px",textAlign:"center",marginRight:"10px"},
    names:{wordBreak:"break-all",overflow:"hidden",flexBasis:"70%",display:"flex",flexWrap:"wrap",
      height:"80px",margin:"10px"
    },
    sectionData:{width:"90%",flexGrow:"10",display:"flex",justifyContent:"space-between"},
    aside:{flexBasis:"25%",textAlign:"left",display:"flex",flexDirection:"column"},
    sectionInfo:{flexBasis:"70%",textAlign:"left",display:"flex",flexDirection:"column",wordBreak:"break-all"},
    SectionsGenerics:{display:"flex",flexDirection:"column",wordBreak:"break-all",
      margin:"5px 0px 2px"
    }
  });
  
  return( 
    <Document>
      <Page style={styles.page}>
        {/* firstname lastName photo occupation*/}
        <View style={styles.sectionNames}>
          <View style={styles.image}>photo</View>
          <Text style={styles.names}>
            <View>
              <Text style={{marginRight:"5px",float:"left"}}>{firstName}</Text>
              <Text style={{float:"left"}}>{lastName}</Text>
            </View>
            <Text style={{float:"left",width:"100%",fontSize:"14px",opacity:"80%"}}>{occupation}</Text>
          </Text>
        </View>
        {/*  */}
        <View style={styles.sectionData}>
          {/* adrees phone email */}
          <View style={styles.aside}>
            <Text style={{borderBottom:"4px solid black",paddingBottom:"5px",width:"30px"}}>Info</Text>
            <View style={styles.SectionsGenerics}>
              <Text style={{fontSize:"10px"}}>Adress</Text>
              <Text style={{fontSize:"7px",opacity:"70%"}}>{address}</Text>
            </View>
            <View style={styles.SectionsGenerics}>
              <Text style={{fontSize:"10px"}}>Phone</Text>
              <Text style={{fontSize:"7px",opacity:"70%"}}>{phone}</Text>
            </View>
            <View style={styles.SectionsGenerics}>
              <Text style={{fontSize:"10px"}}>Email</Text>
              <Text style={{fontSize:"7px",opacity:"70%"}}>{email}</Text>
            </View>
            {/* language skills */}
            <Text style={{fontSize:"14px",borderBottom:"4px solid black",paddingBottom:"5px",width:"30px"}}>Languages</Text>
            <View style={{width:"100%",wordBreak:"break-all"}}>
              {languages.map(item=>{
                return<View style={{display:"flex",justifyContent:"space-between",margin:"5px 0px 5px" }}>
                  <Text style={{fontSize:"7px"}}>{item.language}</Text>
                  <Text style={{fontSize:"7px",opacity:"80%"}}>{item.rating}</Text>  
                </View>
              })}
            </View>
            <Text style={{fontSize:"14px",borderBottom:"4px solid black",paddingBottom:"5px",width:"30px"}}>Skills</Text>
            <View style={{width:"100%",wordBreak:"break-all"}}>
              {skills.map(item=>{
                return<View style={{display:"flex",flexDirection:"column",margin:"5px 0px 5px" }}>
                  <Text style={{fontSize:"7px"}}>{item.skill}</Text>
                  <Text style={{fontSize:"7px",opacity:"80%"}}>{item.rating}</Text> 
                  <View>
                    {/* {skillsBar()} */}
                  </View> 
                
                </View>
              })}
            </View>
          </View>
          {/* employment education prfesionalSuumary*/}
          <View style={styles.sectionInfo}>
            <Text style={{fontSize:"14px",borderBottom:"4px solid black",paddingBottom:"5px"}}>Professional Summary</Text>
            <Text style={{fontSize:"8px",opacity:"80%",margin:"10px 0px 10px"}}>{professionalSummary}</Text>
            
            <Text style={{fontSize:"14px",borderBottom:"4px solid black",paddingBottom:"5px"}}>Employment History</Text>
            {employmentHistory.map(item=>{
                return <View style={{display:"flex",flexDirection:"column",marginTop:"5px"}}>
                  <View style={{display:"flex",justifyContent:"space-between"}}>
                    <Text style={{fontSize:"8px"}}>{item.jobTitle}, {item.employer}</Text>
                    <Text style={{fontSize:"8px",marginRight:"10px"}}>{item.begin}-{item.end}</Text>
                  </View>
                  <Text style={{fontSize:"7px",lineHeight:"1",opacity:"80%"}}>
                    {item.description}
                  </Text>
              </View>
              })}
            <Text style={{fontSize:"14px",borderBottom:"4px solid black",paddingBottom:"5px"}}>Education History</Text>
            {educations.map(item=>{
                return <View style={{display:"flex",flexDirection:"column",marginTop:"5px"}}>
                  <View style={{display:"flex",justifyContent:"space-between"}}>
                    <Text style={{fontSize:"8px"}}>{item.school}, {item.degree}</Text>
                    <Text style={{fontSize:"8px",marginRight:"10px"}}>{item.start}-{item.finish}</Text>
                  </View>
                  <Text style={{fontSize:"7px",lineHeight:"1",opacity:"80%"}}>
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
