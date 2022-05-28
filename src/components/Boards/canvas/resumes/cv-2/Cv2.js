import React, { Component } from "react";

const Cv2 =({form,Text,View,StyleSheet,web,Image,imgs})=>{
  const {firstName,lastName,address,phone,email,languages,
    skills,professionalSummary,employmentHistory,educations,occupation}=form;
    
  
  const styles = StyleSheet.create({
    page:{height:"100%",color:"black",padding:"15px 0px 15px",flexDirection:"column",alignItems:"center",
    overflow:"hidden",
    },
    sectionNames:{width:"90%",height:"18%",lineHeight:"1",textAlign:"justify",textAlign:"justify",
      fontSize:"20px",display:"flex",paddingTop:"20px",marginBottom:"10px",flexWrap:"wrap",
    },
    circle:{width:"130px",height:"130px",backgroundColor:"rgba(240,195,14,255)",borderRadius:"50%",position:"absolute"},
    names:{overflow:"hidden",width:"90%",flexWrap:"wrap",
      height:"120px",
    },
    sectionData:{width:"90%",flexWrap:"wrap",flexDirection:"row",marginTop:"10px"},
    contact:{flexBasis:"100%",textAlign:"left",flexDirection:"row",justifyContent:"flex-end",height:"70px",flexWrap:"wrap",
     
    },
    sectionInfo:{width:"100%",textAlign:"left",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"},
    SectionsGenerics:{flexDirection:"row",width:"22%",height:"80%",
      marginTop:"10px",marginLeft:"",padding:"1px",
    },
    occupation:{height:web?"25px":"28px",width:"100%",fontSize:web?"17px":"22px",opacity:"0.8",position:"absolute",top:"45%",left:"10%",
      overflow:"hidden",
    },
    borders:{border:"2px solid black",width:"100%",borderRadius:"10px",height:"0.1px",backgroundColor:"black",marginTop:"10px"}

  });
  
  return( 
    
<View style={styles.page}>
        <View style={styles.sectionNames}>
        {/* firstname lastName photo occupation*/}
          <View style={styles.circle}></View>
          <View style={styles.names}>
            <View style={{width:"85%",height:"40px",flexDirection:"row",flexWrap:"wrap",position:"absolute",top:"20%",left:"10%",overflow:"hidden"}}>
                <Text style={{marginRight:"5px",fontSize:web?"25px":"24px"}}>{firstName}</Text>
                <Text style={{fontSize:web?"25px":"25px"}}>{lastName}</Text>
            </View>
                <Text style={styles.occupation}>{occupation}</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.sectionData}>
          {/* adrees phone email */}
          <View style={[styles.contact]}>
           
            <View style={styles.SectionsGenerics}>
            <Image source={imgs.ImageCall} style={{width:"20px",height:"20px",marginRight:"5px"}} />
              <View style={{width:"70%"}}>
                <Text style={{fontSize:web?"10px":"13px"}}>Phone</Text>
                <Text style={{fontSize:web?"7px":"9px",opacity:"0.8",width:"100%",height:web?"17px":"25px",overflow:"hidden"}}>{phone}</Text>
              </View>
            </View>
            <View style={styles.SectionsGenerics}>
              <Image source={imgs.ImagEmail} style={{width:"25%",height:"20px",marginRight:"5px"}} />
              <View style={{width:"70%"}}>
                <Text style={{fontSize:web?"10px":"13px"}}>Email</Text>
                <Text style={{fontSize:web?"7px":"8px",opacity:"0.8",width:"100%",height:web?"28px":"25px",overflow:"hidden"}}>{email}</Text>
              </View>
            </View>
            <View style={[styles.SectionsGenerics]}>
              <Image source={imgs.ImageAddress} style={{width:"20px",height:"20px",marginRight:"5px"}} />
              <View style={{width:"70%"}}>
                <Text style={{fontSize:web?"10px":"13px"}}>Adress</Text>
                <Text style={{fontSize:web?"7px":"8px",opacity:"0.8",width:"100%",height:web?"17px":"25px",overflow:"hidden"}}>{address}</Text>
              </View>
            </View>
            <View style={{border:"2px solid black",width:"70%",borderRadius:"10px",height:"0.1px",backgroundColor:"black",marginTop:"-10px"}}></View> 
          </View>
          {/* employment education prfesionalSuumary*/}
          <View style={styles.sectionInfo}>
            <View style={{width:"100%",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-between"}}>
              <Text style={{fontSize:"12px",paddingBottom:"5px",width:"20%"}}>PROFESSIONAL DETAILS</Text>
              <View style={{width:"70%"}}>
                <Text style={{fontSize:"8px",opacity:"0.7"}}>{professionalSummary}</Text>
                <View style={styles.borders}></View>
              </View>
            </View>
            
            <Text style={{fontSize:"12px",paddingBottom:"5px",marginTop:"10px",width:"20%"}}>PROFESSIONAL EXPERIENCE</Text>
            <View style={{width:"70%"}}>  
              {employmentHistory?.map((item,i)=>{
              return <View key={i} style={{flexDirection:"row",marginTop:"10px",justifyContent:"space-between"}}>
                  <View style={{justifyContent:"space-between",flexDirection:"column",width:"25%",justifyContent:"flex-start"}}>
                    <Text style={{fontSize:web?"8px":"10px",maxHeight:"25px",overflow:"hidden",marginBottom:"2px"}}>{item.employer}</Text>
                    <Text style={{fontSize:web?"7px":"10px",opacity:"0.8",maxHeight:"10px",overflow:"hidden"}}>{item.begin}-{item.end}</Text>
                  </View>
                  <View style={{lineHeight:"1",flexDirection:"column",width:"70%"}}>
                    <Text style={{fontSize:"8px",height:"9px",overflow:"hidden",marginBottom:"5px"}}>{item.jobTitle}</Text>
                    <Text style={{fontSize:"7px",opacity:"0.7"}}>{item.description}</Text>
                  </View>
              </View>
              })}
               <View style={styles.borders}></View>
            </View>
            <Text style={{fontSize:"12px",paddingBottom:"5px",marginTop:"10px",width:"20%"}}>EDUCATION</Text>
            <View style={{width:"70%"}}>
              {educations?.map((item,i)=>{
                return <View key={i} style={{flexDirection:"row",marginTop:"10px",justifyContent:"space-between"}}>
                  <View style={{justifyContent:"space-between",flexDirection:"column",width:"25%",justifyContent:"flex-start"}}>
                      <Text  style={{fontSize:web?"8px":"10px",maxHeight:"25px",overflow:"hidden"}}>{item.school}</Text>
                      <Text style={{marginRight:"10px",fontSize:web?"7px":"10px",opacity:"0.8",overflow:"hidden",maxHeight:"10px"}}>{item.start}-{item.finish}</Text>
                    </View>
                    <View style={{fontSize:"9px",lineHeight:"1",flexDirection:"column",width:"70%"}}>
                      <Text style={{fontSize:"8px",height:"9px",overflow:"hidden",marginBottom:"5px",maxHeight:"25px"}}>{item.degree}</Text>
                      <Text style={{fontSize:"7px",opacity:"0.7"}}>{item.description}</Text>
                    </View>
                </View>
                })}
                <View style={[styles.borders,{marginBottom:"10px"}]}></View>
            </View>
          <Text style={{fontSize:"14px",paddingBottom:"5px",width:"20%"}}>Skills</Text>
          <View style={{width:"70%",flexDirection:"row",flexWrap:"wrap"}}>
              {skills.map((item,i)=>{
                 let array=[] 
                 for (let index = 0; index < parseInt(item.rating)/10; index++) {
                   array.push(index)
                }
                return<View key={i} style={{justifyContent:"space-between",flexDirection:"row",opacity:"0.8",marginLeft:"5px",} }>
                  <Text style={{fontSize:web?"9px":"10px",maxWidth:"100px",overflow:"hidden",height:"15px"}}>{item.skill}</Text> 
                  <View style={{height:"15px",flexDirection:"row",padding:"2px"}}>
                    {[0,0,0,0,0,0,0,0,0].map((item,i)=>{
                      return <View key={i} style={{backgroundColor:array[i]!==undefined?"rgba(240,195,14,255)":"gray",height:"10px",width:"10px",marginLeft:"0.5px",marginRight:"0.5px",borderRadius:"50%"}}></View>
                    })}
                  </View> 
                
                </View>
              })}
            
            <View style={styles.borders}></View>
          </View>
          </View>

        </View>
    </View>
      
  )}
 
export default Cv2;
