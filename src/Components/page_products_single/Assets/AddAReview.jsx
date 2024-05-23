import React from 'react';
import { Rate } from 'antd';
import styled from 'styled-components';

const AddAReview = () => {

    return (
        <StyledForm action="#">

            <div id="FormHeading">
                <h3>Add a Review</h3>
                <p>Your email address will not be published. Required fields are marked *</p>
            </div>

            <div id="RatingDivison">
                <p>Your rating of this product</p>
                <div id="RateUrChoice">
                    <Rate defaultValue={1} />
                </div>
            </div>

            <div id="UrReview">
                <label htmlFor="yourReview">Your review</label>
                <textarea name="customerReview" id="yourReview" placeholder='Write your comments here'></textarea>
            </div>

            <div id="userInputs">

                <div id="InputFields">
                    <div id="fieldOne">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="username" id="name" placeholder='user name' />
                    </div>
                    <div id="fieldTwo">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="useremail" id="email" placeholder='user email' />
                    </div>
                </div>

                <div id="formCheckBox">
                    <input type="checkbox" name="defaultSignin" id="defaultSignin" />
                    <label htmlFor="defaultSignin">Save my name, email, and website in this browser for the next time I comment.</label>
                </div>

                <div id="SubmitBTN">
                    <button type="submit">Submit</button>
                </div>

            </div>

        </StyledForm>
    );
};

export default AddAReview;

const StyledForm = styled.form`
    padding:1rem 0 !important;
    display:flex;
    flex-direction:column;
    align-items:start;
    gap:1rem;

    #FormHeading,
    #RatingDivison,
    #UrReview {
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:start;
        gap:1rem;
    }

    #UrReview > label {
        cursor:pointer;
    }

    #UrReview > textarea {
        width:100%;
        min-height:10rem;
        padding:8px !important;
        border: 1px solid #EAEAEA;
        outline: 1px solid #EAEAEA;
        background-color:inherit;
    }

    #userInputs {
        display:flex;
        flex-direction:column;
        align-items:start;
        gap:1rem;

        #InputFields {
            display:flex;
            align-items:center;
            justify-content:space-between;

            #fieldOne,
            #fieldTwo {
                display-flex;
                flex-direction:column;
                align-items:center;
                gap:1rem;
                padding:1rem !important;
            }
            #fieldOne > input,
            #fieldTwo > input {
                width:100%;
                min-height:2rem;
                outline: none;
                border: 1px solid #EAEAEA;
                padding: .5rem !important;                
                border-radius:6px;
            }
            #fieldOne > input:focus,
            #fieldTwo > input:focus{
                border: 1px solid #041E42;
                box-shadow: 0px 10px 20px 0px #041E420D;
            }
        }

        #formCheckBox{
            display:flex;
            align-items:center;
            justify-content:start;
            gap: .5rem;
        }

        #SubmitBTN>button{
            border: none;
            outline: none;
            background: #F5C34B;
            border: 1px solid #F5C34B;
            box-shadow: 0px 5px 20px 0px #F5C34B26;
            font-soze: 1rem;
            padding: .5rem 1rem !important;
            border-radius: 6px;
            cursor: pointer;
        }

        #SubmitBTN>button:hover{
            background-color:#FFF;
        }
    }

`;