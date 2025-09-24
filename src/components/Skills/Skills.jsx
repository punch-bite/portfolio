import React from 'react';
import './Skills.css';
import skillDatas from '../../datas/Skills.json';

export const Skills = () => {
    return (
        <section id='skills' className='skills'>
            <div className="container">
                <h1 className='my-5 text-uppercase fw-bolder text-white'>Compétences</h1>
                <div className="innerCompetences">
                    {skillDatas.categories.map(category => (
                        <div key={category.id} className="row">
                            <h3 className='col-12 mb-3' >{category.name}</h3>
                            {category.skills.map(skill => (
                                <div key={skill.id} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 p-md-2 p-1">
                                    <div className="card fade-in visible">
                                        <div className="card-header d-flex justify-content-between align-items-center pb-0">
                                            <div className="title text-nowrap d-flex align-items-center">
                                                <lord-icon src={skill.icon !== "" ? `https://cdn.lordicon.com/${skill.icon}.json` : '#'}
                                                    delay='2000'
                                                    trigger="loop"
                                                    colors="primary:#9932cc,secondary:#9932cc"
                                                    style={{ width: '40px', height: '40px' }}>
                                                </lord-icon>
                                                <h5 className='ms-3'>{skill.name}</h5>
                                            </div>
                                            <span className='fw-bolder text-white'>{skill.level}%</span>
                                        </div>
                                        <div className="card-body pt-0">
                                            <small className='text-white fw-bold'>{skill.description}</small>
                                            <div className="progress mt-2" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'10px'}}>
                                                <div className="progress-bar" style={{ width: skill.level + "%" }}>{ skill.level + "%" }</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))};
                </div>
            </div>
        </section>
    )
}