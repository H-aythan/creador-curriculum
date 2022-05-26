import React, { Component } from "react";
import {Font} from "@react-pdf/renderer";
const Cv3 =({form,Text,View,StyleSheet,web})=>{
  const {firstName,lastName,address,phone,email,languages,
    skills,professionalSummary,employmentHistory,educations,occupation}=form;
  
  const styles = StyleSheet.create({
    page:{height:"100%",color:"black",flexDirection:"column",alignItems:"center",
      paddingTop:"30px",fontFamily:"Georgia",
    },
    sectionNames:{width:"90%",height:"18%",lineHeight:"1",textAlign:"justify",textAlign:"justify",
      fontSize:"20px",display:"flex",paddingTop:"20px",marginBottom:"10px",flexWrap:"wrap",border:"2px solid black"
    },
    occupation:{height:web?"25px":"28px",fontSize:web?"13px":"22px",height:"18px",
      overflow:"hidden"
    },
    names:{overflow:"hidden",width:"85%",flexWrap:"wrap",textAlign:"left",marginBottom:"10"
    },
    borders:{borderBottom:"1px solid black",width:"85%",borderRadius:"10px",height:"0.1px",backgroundColor:"black",marginTop:"10px",opacity:"0.5",marginBottom:"15px"},
    generics:{width:"85%",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-between",textAlign:"left",
      alignItems:"flex-start",paddingTop:"10px",
    },
    point:{border:"2px solid black",borderRadius:"50%",width:"2px",height:"2px",marginRight:"2px"},
  })
 
  return<View style={[styles.page]}>
     <View style={styles.names}>
        <View style={{width:"65%",flexDirection:"column",overflow:"hidden"}}>
          <Text style={{fontSize:web?"25px":"24px",overflow:"hidden",height:"35px",color:"rgba(162,99,102,255)",fontFamily:"Georgia",}}>{firstName}</Text>
          <Text style={{fontSize:web?"25px":"25px",overflow:"hidden",height:"35px",color:"rgba(162,99,102,255)",fontFamily:"Georgia",}}>{lastName}</Text>
          <Text style={styles.occupation}>{occupation}</Text>
          <Text style={{fontSize:web?"12px":"25px",overflow:"hidden",height:"14px",opacity:"0.8",fontFamily:"Georgia"}}>{address}</Text>
          <Text style={{fontSize:web?"12px":"25px",overflow:"hidden",height:"14px",opacity:"0.8",fontFamily:"Georgia"}}>{phone}</Text>
        </View>
      </View>
      <View style={[styles.borders]}></View>
      <View style={styles.generics}>
        <Text style={{width:"20%",fontSize:"16px",fontFamily:"Georgia"}}>Summary</Text>
        {/* <View style={{height:"50%"}}>
        </View> */}
        <View style={{width:"75%"}}>
          <Text style={{fontSize:"8px",opacity:"0.7",fontFamily:"Georgia",marginTop:"5px"}}>{professionalSummary}</Text>
        </View>
      </View>
      <View style={styles.borders}></View>
      <View style={styles.generics}>
        <Text style={{fwidth:"20%",fontSize:"16px",fontFamily:"Georgia"}}>Experience</Text>

        <View style={{width:"70%"}}>
          {employmentHistory?.map((item,i)=>{
                return <View key={i} style={{flexDirection:"column",marginBottom:"10px"}}>
                    <View style={{justifyContent:"space-between",flexDirection:"row",width:"100%"}}>
                      <Text style={{fontSize:web?"8px":"10px",height:"8px",overflow:"hidden",marginBottom:"2px",fontFamily:"Georgia",maxWidth:"50%",fontFamily:"Georgia"}}>{item.employer}</Text>
                      <Text style={{fontSize:web?"7px":"10px",height:"8px",opacity:"0.8",overflow:"hidden",fontFamily:"Georgia",maxWidth:"45%",fontFamily:"Georgia"}}>{item.begin}-{item.end}</Text>
                    </View>
                    <View style={{flexDirection:"",width:"70%"}}>
                      <Text style={{fontSize:"8px",height:"9px",overflow:"hidden",maxWidth:"70%",fontFamily:"Georgia"}}>{item.jobTitle}</Text>
                      <Text style={{fontSize:"7px",opacity:"0.7",marginTop:"2px",fontFamily:"Georgia",marginTop:"5px"}}>{item.description}</Text>
                    </View>
                </View>
                })}
          </View>
      </View>
      <View style={styles.borders}></View>
      <View style={styles.generics}>
        <Text style={{width:"20%",fontSize:"16px",fontFamily:"Georgia"}}>Educations</Text>
        <View style={{width:"70%"}}>
                {educations?.map((item,i)=>{
                  return <View key={i} style={{flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap",marginBottom:"10px"}}>
                    <View style={{justifyContent:"space-between",flexDirection:"row",width:"100%"}}>
                        <Text  style={{fontSize:web?"8px":"10px",maxWidth:"60%",maxHeight:"12px",overflow:"hidden",fontFamily:"Georgia"}}>{item.school},{item.degree}</Text>
                        <Text style={{fontSize:web?"7px":"10px",height:"8px",opacity:"0.8",overflow:"hidden",fontFamily:"Georgia",maxWidth:"25%",fontFamily:"Georgia"}}>{item.start}-{item.finish}</Text>
                      </View>
                      <View style={{fontSize:"9px",width:"100%",marginTop:"5px"}}>
                        <Text style={{fontSize:"7px",opacity:"0.7"}}>{item.description}</Text>
                      </View>
                  </View>
                  })}
              </View>
      </View>
      <View style={styles.borders}></View>
      <View style={styles.generics}>
        <Text style={{width:"20%",fontSize:"16px",fontFamily:"Georgia"}}>Skills</Text>
        <View style={{width:"70%",flexDirection:"row",flexWrap:"wrap"}}>
              {skills.map((item,i)=>{
                  let number =parseInt(item.rating)/10;
                return<View key={i} style={{opacity:"0.8",width:"50%",flexDirection:"row",alignItems:"center",marginTop:"2px"}}>
                  <View style={styles.point}></View>
                  <Text style={{fontSize:web?"9px":"10px",maxWidth:"100px",overflow:"hidden",height:"10px",fontFamily:"Georgia"}}>{item.skill} {number}</Text> 
                </View>
              })}
          </View>
      </View>
      <View style={styles.borders}></View>
      <View style={styles.generics}>
        <Text style={{width:"20%",fontSize:"16px",fontFamily:"Georgia"}}>Languages</Text>
        <View style={{width:"70%",flexDirection:"row",flexWrap:"wrap"}}>
              {languages.map((item,i)=>{
                  
                return<View key={i} style={{opacity:"0.8",width:"50%",flexDirection:"row",alignItems:"center",marginTop:"5px"}}>
                  <View style={styles.point}></View>
                  <Text style={{fontSize:web?"9px":"10px",maxWidth:"100px",overflow:"hidden",height:"10px",fontFamily:"Georgia"}}>{item.language} : {item.rating}</Text> 
                </View>
              })}
          </View>
      </View>
  </View>
}
Font.register({
  family:'Georgia',
  src: require('../../../../../assets/cv3-assets/16902_Georgia.ttf')
});
export default Cv3;
